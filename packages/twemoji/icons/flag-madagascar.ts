import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiFlagMadagascarIcon],svg[twemoji-flag-madagascar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FC3D32" d="M32 5H13v13h23V9a4 4 0 0 0-4-4"></svg:path><svg:path fill="#007E3A" d="M13 31h19a4 4 0 0 0 4-4v-9H13z"></svg:path><svg:path fill="#EEE" d="M13 5H4a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h9z"></svg:path>`,
})
export class TwemojiFlagMadagascarIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
