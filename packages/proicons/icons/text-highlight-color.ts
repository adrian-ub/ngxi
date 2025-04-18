import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsTextHighlightColorIcon],svg[proicons-text-highlight-color-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:rect width="16.5" height="16.5" x="3.75" y="3.75" rx="4"></svg:rect><svg:path d="m8.25 16l1.34-3.063m0 0h4.82m-4.82 0l2.051-4.694a.386.386 0 0 1 .718 0l2.052 4.694m0 0L15.75 16"></svg:path></svg:g>`,
})
export class ProiconsTextHighlightColorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
