import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsMicLightIcon],svg[lets-icons-mic-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:rect width="6" height="11" x="9" y="3" rx="3"></svg:rect><svg:path stroke-linecap="round" d="M5.5 11a6.5 6.5 0 0 0 13 0M12 21v-2"></svg:path></svg:g>`,
})
export class LetsIconsMicLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
