import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsStopFillIcon],svg[lets-icons-stop-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="4" height="14" x="6" y="5" fill="currentColor" rx="1"></svg:rect><svg:rect width="4" height="14" x="14" y="5" fill="currentColor" rx="1"></svg:rect>`,
})
export class LetsIconsStopFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
