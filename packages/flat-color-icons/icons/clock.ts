import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsClockIcon],svg[flat-color-icons-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="20" fill="#00ACC1"></svg:circle><svg:circle cx="24" cy="24" r="16" fill="#eee"></svg:circle><svg:path d="M23 11h2v13h-2z"></svg:path><svg:path d="M31.285 29.654L29.66 31.28l-6.504-6.504l1.626-1.627z"></svg:path><svg:circle cx="24" cy="24" r="2"></svg:circle><svg:circle cx="24" cy="24" r="1" fill="#00ACC1"></svg:circle>`,
})
export class FlatColorIconsClockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
