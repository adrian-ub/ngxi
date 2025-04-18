import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsThumbsDownIcon],svg[proicons-thumbs-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:rect width="4.2" height="13.296" x="21.25" y="16.799" rx="1.5" transform="rotate(180 21.25 16.8)"></svg:rect><svg:path d="M17.05 14.475V6.503a3 3 0 0 0-3-3H7.177a2.5 2.5 0 0 0-2.412 1.843l-1.958 7.188a2.5 2.5 0 0 0 2.412 3.157h4.095V19.5a2 2 0 0 0 2 2h.036a2 2 0 0 0 1.67-.9z"></svg:path></svg:g>`,
})
export class ProiconsThumbsDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
