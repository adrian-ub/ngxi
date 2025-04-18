import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsTextColorIcon],svg[proicons-text-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="m7.154 13.088l1.73-3.959m0 0h6.231m-6.23 0l2.652-6.065a.5.5 0 0 1 .926 0l2.652 6.065m0 0l1.731 3.96"></svg:path><svg:rect width="15.5" height="4.353" x="4.25" y="16.897" rx="1.5"></svg:rect></svg:g>`,
})
export class ProiconsTextColorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
