import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiFlagLtrIcon],svg[ooui-flag-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6L3 1v18h2v-6.87z"></svg:path>`,
})
export class OouiFlagLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
