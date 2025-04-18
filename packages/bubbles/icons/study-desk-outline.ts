import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesStudyDeskOutlineIcon],svg[bubbles-study-desk-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M22.614 15.16a.5.5 0 0 1-.474.341H1.86a.5.5 0 0 1-.474-.341l-.667-2a.5.5 0 0 1 .475-.659h21.612a.5.5 0 0 1 .475.659zM3 15.501l-1.5 8m19.5-8l1.5 8M10.879 1.38a3 3 0 0 1 4.242 4.243z"></svg:path><svg:path d="M15.236 1.5A2.764 2.764 0 0 1 18 4.265V10.5m-8.5-1h-5a1.5 1.5 0 0 0 0 3h5zm1-2.999h-1m1 3h-1m0-3.001h-5a1.5 1.5 0 0 0 0 3h5z"></svg:path><svg:path d="M20 12.5h-4a2 2 0 0 1 4 0"></svg:path></svg:g>`,
})
export class BubblesStudyDeskOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
