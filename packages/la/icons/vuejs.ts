import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laVuejsIcon],svg[la-vuejs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 6l13 22L29 6H19l-3 5.3L13 6zm3.5 2h3.771L16 18l5.729-10H25.5L16 24.1z"></svg:path>`,
})
export class LaVuejsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
