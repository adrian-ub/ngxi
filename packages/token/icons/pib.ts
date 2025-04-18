import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenPibIcon],svg[token-pib-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 10.232V7.045l3.574-2.033l2.755 1.582zM11.75 3L9 4.681l6.5 3.69V5.132zM16 12.82V5.399l3 1.64V11.2zm2.999 2.067v-3.194l-6.3 3.639l2.734 1.658zM8.5 16.777v-3.219L15 17.27L12.25 19zM5 19.364v-6.708L8 11v10zm5-9.686L12 8.5l2 1.178v2.555L12 13.5l-2-1.267z"></svg:path>`,
})
export class TokenPibIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
