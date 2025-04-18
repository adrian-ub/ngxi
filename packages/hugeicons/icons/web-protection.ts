import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWebProtectionIcon],svg[hugeicons-web-protection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 20.5c.889-.2 1.564-.528 2.109-1.067c1.391-1.378 1.391-3.594 1.391-8.028s0-6.65-1.391-8.028C18.717 2 16.479 2 12 2C7.522 2 5.282 2 3.891 3.377S2.5 6.971 2.5 11.405s0 6.65 1.391 8.028c.545.54 1.22.867 2.109 1.067m-3.5-12h19M7 5.5h.009M11 5.5h.009"></svg:path><svg:path d="M12 13c-1.426 0-2.35.909-3.442 1.24c-.444.134-.666.202-.756.297s-.116.233-.169.51c-.563 2.969.668 5.713 3.605 6.78c.315.116.473.173.763.173s.447-.057.763-.172c2.936-1.068 4.166-3.812 3.603-6.78c-.053-.278-.08-.417-.169-.511s-.312-.163-.756-.297c-1.093-.331-2.018-1.24-3.443-1.24"></svg:path></svg:g>`,
})
export class HugeiconsWebProtectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
