import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsCloudUpIcon],svg[pepicons-cloud-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M11 3h-1a4.002 4.002 0 0 0-3.874 3H6a4 4 0 1 0 0 8h8a4 4 0 0 0 .899-7.899A4.002 4.002 0 0 0 11 3ZM7.676 8l.387-1.501A2.002 2.002 0 0 1 10 5h1c.937 0 1.743.65 1.95 1.549l.28 1.221l1.221.28A2.002 2.002 0 0 1 14 12H6a2 2 0 1 1 0-4h1.676Z" clip-rule="evenodd"></svg:path><svg:path d="M11.5 16a1 1 0 1 1-2 0V8.5a1 1 0 0 1 2 0V16Z"></svg:path><svg:path d="M8.625 11.28a1 1 0 1 1-1.25-1.56l2.5-2a1 1 0 1 1 1.25 1.56l-2.5 2Z"></svg:path><svg:path d="M13.625 9.72a1 1 0 1 1-1.25 1.56l-2.5-2a1 1 0 0 1 1.25-1.56l2.5 2Z"></svg:path></svg:g>`,
})
export class PepiconsCloudUpIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
