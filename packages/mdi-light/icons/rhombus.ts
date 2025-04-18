import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiLightRhombusIcon],svg[mdi-light-rhombus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.59 12.5l8.91-8.91l8.91 8.91l-8.91 8.91zM11.5 5L4 12.5l7.5 7.5l7.5-7.5z"></svg:path>`,
})
export class MdiLightRhombusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
