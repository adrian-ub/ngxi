import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineRoseIcon],svg[streamline-rose-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 4.108a8.6 8.6 0 0 1 5.495-1.599v3.497a5.495 5.495 0 0 1-10.99 0V2.51s6.554-.79 9.552 7.204"></svg:path><svg:path d="M9.908 2.769a2.998 2.998 0 0 0-5.816 0M7 11.502V13.5"></svg:path></svg:g>`,
})
export class StreamlineRoseIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
