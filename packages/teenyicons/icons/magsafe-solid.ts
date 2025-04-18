import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsMagsafeSolidIcon],svg[teenyicons-magsafe-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0H3v3h9zm2 4H1v6h3v2h1v3h1v-3h3v3h1v-3h1v-2h3z"></svg:path>`,
})
export class TeenyiconsMagsafeSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
