import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoAidsIcon],svg[fontisto-aids-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.47 13.321l-2.339 3.774l4.281 6.904l3.37-2.086zM13.555 0H2.225L-.001 3.97l5.313 8.58l2.339-3.781l-2.972-4.8h6.418L-.001 21.913l3.376 2.086L15.78 3.969z"></svg:path>`,
})
export class FontistoAidsIcon {
  readonly viewBox = input("0 0 16 24")
  readonly width = input("0.67em")
  readonly height = input("1em")
}
