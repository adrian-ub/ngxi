import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPServiceIcon],svg[arcticons-p-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="24.818" height="39" x="11.591" y="4.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="3.546" ry="3.546"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.776 10.909h18.449v26.182H14.776z"></svg:path><svg:rect width="9.611" height="8.12" x="19.195" y="23.022" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.182" ry="1.182"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.045 23.022v-2.28c.033-4.582 6.198-4.54 6.214.054v2.226"></svg:path>`,
})
export class ArcticonsPServiceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
