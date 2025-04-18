import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsBrandXIcon],svg[humbleicons-brand-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m18 4l-5 6.667M6 20l5-6.667m2-2.666L8.3 4.4a1 1 0 0 0-.8-.4H4l7 9.333m2-2.666L20 20h-3.5a1 1 0 0 1-.8-.4L11 13.333"></svg:path>`,
})
export class HumbleiconsBrandXIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
