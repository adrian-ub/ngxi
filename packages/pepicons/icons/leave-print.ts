import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsLeavePrintIcon],svg[pepicons-leave-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="10" height="15" x="6" y="4" fill="currentColor" opacity=".8" rx="1"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.667 7.5L17.75 10l-2.083-2.5Zm0 5L17.75 10l-2.083 2.5Z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" d="M17 10H9.5M4 3h9M4 17h9m0-14v4m0 6v4M4 3v14"></svg:path></svg:g>`,
})
export class PepiconsLeavePrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
