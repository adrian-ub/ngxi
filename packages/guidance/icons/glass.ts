import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceGlassIcon],svg[guidance-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M10.5 7.015V.5h3v6.515a6 6 0 0 0 1.757 4.242L17.5 13.5v10h-11v-10l2.243-2.243A6 6 0 0 0 10.5 7.015Z"></svg:path>`,
})
export class GuidanceGlassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
