import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsMicAltDuotoneIcon],svg[lets-icons-mic-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.2"><svg:rect width="12" height="16" x="6" y="3" fill="currentColor" fill-opacity=".25" rx="6"></svg:rect><svg:path stroke-linecap="round" d="M12 22v-3m-2-6H7m11 0h-2m-6-4H7m11 0h-2"></svg:path></svg:g>`,
})
export class LetsIconsMicAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
