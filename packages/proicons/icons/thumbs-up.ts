import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsThumbsUpIcon],svg[proicons-thumbs-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:rect width="4.2" height="13.296" x="3.25" y="7.201" rx="1.5"></svg:rect><svg:path d="M7.45 9.526v7.97a3 3 0 0 0 3 3h6.873a2.5 2.5 0 0 0 2.412-1.842l1.958-7.188a2.5 2.5 0 0 0-2.412-3.157h-4.095V4.5a2 2 0 0 0-2-2h-.036a2 2 0 0 0-1.67.9z"></svg:path></svg:g>`,
})
export class ProiconsThumbsUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
