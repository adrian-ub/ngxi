import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFacebookMessengerLiteIcon],svg[arcticons-facebook-messenger-lite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M43.324 33.435A21.51 21.51 0 0 0 24 2.5h0A21.47 21.47 0 0 0 5.045 34.109l-.56 2.084l-1.928 7.202a1.673 1.673 0 0 0 2.049 2.048l7.2-1.928l2.074-.555a21.48 21.48 0 0 0 19.553.366M20.525 17.039l6.667 6.667l9.776-6.667l-6.667 9.776l-2.825 4.146l-6.667-6.667l-9.777 6.667l6.668-9.776Z"></svg:path><svg:circle cx="38.5" cy="38.5" r="7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.5 34.5v8h4"></svg:path>`,
})
export class ArcticonsFacebookMessengerLiteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
