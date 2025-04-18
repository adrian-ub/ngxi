import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesPhoneActionHomeOutlineIcon],svg[bubbles-phone-action-home-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M14.25 14.25v6.268a2.73 2.73 0 0 1-2.733 2.732H4.983a2.73 2.73 0 0 1-2.733-2.732V4.983A2.73 2.73 0 0 1 4.983 2.25H9m-6.75 16.5h12"></svg:path><svg:path d="M11.25 3.948v5.8a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5v-5.8"></svg:path><svg:path d="m9.75 5.26l4.518-3.953a2.25 2.25 0 0 1 2.964 0L21.75 5.26m-4.5 5.99h-3v-3a1.5 1.5 0 1 1 3 0z"></svg:path></svg:g>`,
})
export class BubblesPhoneActionHomeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
