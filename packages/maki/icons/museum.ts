import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiMuseumIcon],svg[maki-museum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 0L1 3.5V4h13v-.5zM2 5v5l-1 1.6V13h13v-1.4L13 10V5zm2 1h1v5.5H4zm3 0h1v5.5H7zm3 0h1v5.5h-1z"></svg:path>`,
})
export class MakiMuseumIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
