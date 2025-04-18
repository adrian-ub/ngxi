import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiFlagRtlIcon],svg[ooui-flag-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 6l14-5v18h-2v-6.87z"></svg:path>`,
})
export class OouiFlagRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
