import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggLoadbarIcon],svg[gg-loadbar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="18" height="4" x="3" y="10" fill="currentColor" rx="2"></svg:rect>`,
})
export class GgLoadbarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
