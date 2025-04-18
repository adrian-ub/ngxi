import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesUserTimeOutlineIcon],svg[bubbles-user-time-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M.75 17.25a6.753 6.753 0 0 1 9.4-6.208M3.375 4.875a4.125 4.125 0 1 0 8.25 0a4.125 4.125 0 0 0-8.25 0M11.25 17.25a6 6 0 1 0 12 0a6 6 0 0 0-12 0"></svg:path><svg:path d="M19.901 17.25H17.25v-2.652"></svg:path></svg:g>`,
})
export class BubblesUserTimeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
