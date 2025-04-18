import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons34hdIcon],svg[arcticons-34hd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.549l9.514 25.119L24 10.332l9.986 27.336l9.514-25.12L24 32.399z"></svg:path>`,
})
export class Arcticons34hdIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
