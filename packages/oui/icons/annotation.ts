import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiAnnotationIcon],svg[oui-annotation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6.5a4.5 4.5 0 1 1 5 4.473V16H7v-5.027A4.5 4.5 0 0 1 3 6.5"></svg:path>`,
})
export class OuiAnnotationIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
