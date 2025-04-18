import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiPrison11Icon],svg[maki-prison-11-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M2 1v9h7V1H2zm1 1h1v3H3V2zm2 0h1v3H5V2zm2 0h1v2H7V2zm.5 3a.5.5 0 1 1 0 1a.5.5 0 0 1 0-1zM3 6h1v3H3V6zm2 0h1v3H5V6zm2 1h1v2H7V7z" fill="currentColor"></svg:path>`,
})
export class MakiPrison11Icon {
  readonly viewBox = input("0 0 11 11")
  readonly width = input("1em")
  readonly height = input("1em")
}
