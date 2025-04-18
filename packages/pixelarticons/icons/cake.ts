import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsCakeIcon],svg[pixelarticons-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h2v2H6zm2 3H6v3H2v9h6v-2h2v2h4v-2h2v2h6V8h-4V5h-2v3h-3V5h-2v3H8zm12 10h-4v-3h-2v3h-4v-3H8v3H4v-5h16zM2 20h20v2H2zM13 2h-2v2h2zm3 0h2v2h-2zM2 17h2v3H2zm18 0h2v3h-2z"></svg:path>`,
})
export class PixelarticonsCakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
