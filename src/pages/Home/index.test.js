import { fireEvent, render, screen, within } from "@testing-library/react";
import Home from "./index";
import { api, DataProvider } from "../../contexts/DataContext";

const data = {
  events: [
    {
      "id": 2,
      "type": "expérience digitale",
      "date": "2022-01-29T20:28:45.744Z",
      "title": "#DigitonPARIS",
      "cover": "/images/charlesdeluvio-wn7dOzUh3Rs-unsplash.png",
      "description": "Présentation des outils analytics aux professionnels du secteur ",
      "nb_guesses": 1300,
      "periode": "24-25-26 Février",
      "prestations": [
        "1 espace d’exposition",
        "1 scéne principale",
        "1 site web dédié"
      ]
    },
    {
      "id": 12,
      "type": "soirée entreprise",
      "date": "2022-03-29T20:28:45.744Z",
      "title": "Mega Event",
      "cover": "/images/chuttersnap-Q_KdjKxntH8-unsplash.png",
      "description": "Présentation des outils analytics aux professionnels du secteur ",
      "nb_guesses": 1300,
      "periode": "24-25-26 Février",
      "prestations": [
        "1 espace d’exposition",
        "1 scéne principale",
        "2 espaces de restaurations",
        "1 site web dédié"
      ]
    }
  ],
  focus: [
    {
      "title": "Sneakercraze market",
      "description": "Rencontres de spécialistes des Sneakers Européens.",
      "date": "2022-05-29T20:28:45.744Z",
      "cover": "/images/jakob-dalbjorn-cuKJre3nyYc-unsplash 1.png"
    }
  ]
};
// test formulaire champs
describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Home />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });
  // test formulaire success message
  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Home />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });
});

// implementation de Réalisation events
describe("When a page is created", () => {
  it("a list of events is displayed", async () => {
    api.loadData = jest.fn().mockReturnValue(data);
    render(
      <DataProvider>
        <Home />
      </DataProvider>
    );
    const eventsListElement = screen.getByTestId("events-test-id");
    await within(eventsListElement).findByText("#DigitonPARIS");
    await within(eventsListElement).findByText("janvier");
    await within(eventsListElement).findByText("expérience digitale");
    await within(eventsListElement).findByText("Mega Event");
    await within(eventsListElement).findByText("mars");
    await within(eventsListElement).findByText("soirée entreprise");
  })

  // implementation de l'équipe
  it("a list a people is displayed", async () => {
    render(<Home />);
    await screen.findByText("Samira");
    await screen.findByText("CEO");
    await screen.findByText("Jean-baptiste");
    await screen.findByText("Directeur marketing");
    await screen.findByText("Alice");
    await screen.findByText("CXO");
    await screen.findByText("Luís");
    await screen.findByText("Animateur");
    await screen.findByText("Christine");
    await screen.findByText("VP animation");
    await screen.findByText("Isabelle");
    await screen.findByText("VP communication");
  })

  // implementation du Footer
  it("a footer is displayed", async () => {
    render(<Home />);
    await screen.findByText("Notre dernière prestation");
    await screen.findByText("Contactez-nous");
  })

  // implementation de Last event
  it("an event card, with the last event, is displayed", async () => {
    api.loadData = jest.fn().mockReturnValue(data);
    render(
      <DataProvider>
        <Home />
      </DataProvider>
    );
    const lastElement = screen.getByTestId("last-test-id");
    await within(lastElement).findByText("Mega Event");
    await within(lastElement).findByText("mars");
    await within(lastElement).findByText("soirée entreprise");
  })
});
