import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsAppsAddIcon],svg[proicons-apps-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:rect width="6.5" height="6.5" x="3.75" y="3.75" rx="2"></svg:rect><svg:path d="M17 3.75V7m0 0v3.25M17 7h-3.25M17 7h3.25"></svg:path><svg:rect width="6.5" height="6.5" x="3.75" y="13.75" rx="2"></svg:rect><svg:rect width="6.5" height="6.5" x="13.75" y="13.75" rx="2"></svg:rect></svg:g>`,
})
export class ProiconsAppsAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
