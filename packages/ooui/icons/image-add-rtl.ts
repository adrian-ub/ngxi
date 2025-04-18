import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiImageAddRtlIcon],svg[ooui-image-add-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6v2H8v4H2v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM3.83 17l3.55-4.5l2.52 3l3.55-4.5L18 17zM4 10h2V6h4V4H6V0H4v4H0v2h4z"></svg:path>`,
})
export class OouiImageAddRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
