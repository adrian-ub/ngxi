import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsCloudDownFilledIcon],svg[pepicons-cloud-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M12 14V9.25a1.5 1.5 0 0 0-3 0V14H6a4 4 0 0 1 0-8h.126C6.57 4.275 8.136 3 10 3h1c1.9 0 3.49 1.325 3.899 3.101A4.002 4.002 0 0 1 14 14h-2Z" clip-rule="evenodd"></svg:path><svg:path d="M9.5 9.5a1 1 0 1 1 2 0V17a1 1 0 1 1-2 0V9.5Z"></svg:path><svg:path d="M12.375 14.72a1 1 0 1 1 1.25 1.56l-2.5 2a1 1 0 0 1-1.25-1.56l2.5-2Z"></svg:path><svg:path d="M7.375 16.28a1 1 0 1 1 1.25-1.56l2.5 2a1 1 0 0 1-1.25 1.56l-2.5-2Z"></svg:path></svg:g>`,
})
export class PepiconsCloudDownFilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
