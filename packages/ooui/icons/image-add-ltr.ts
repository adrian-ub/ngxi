import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiImageAddLtrIcon],svg[ooui-image-add-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 17H2l3.5-4.5l2.5 3l3.5-4.5l.5.67V8H8V6H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-5.75z"></svg:path><svg:path fill="currentColor" d="M16 4V0h-2v4h-4v2h4v4h2V6h4V4z"></svg:path>`,
})
export class OouiImageAddLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
