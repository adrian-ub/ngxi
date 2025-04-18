import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiStadium11Icon],svg[maki-stadium-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5 0v3.012c-2.208.097-3.912.806-4 1.67v3.681C1 9.267 3.014 10 5.5 10S10 9.267 10 8.363V4.682c-.088-.864-1.79-1.574-4-1.67v-.44L8.5 1.5L5 0zM1.818 5.752c.319.178.72.332 1.182.453v2.46c-.75-.237-1.179-.568-1.182-.915V5.752zm7.364.004V7.75c-.002.348-.43.68-1.182.916V6.203c.461-.12.862-.271 1.182-.447zM4 6.398a11.066 11.066 0 0 0 3 0v2.493C6.528 8.962 6.017 9 5.5 9S4.472 8.962 4 8.89V6.399z" fill="currentColor"></svg:path>`,
})
export class MakiStadium11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
