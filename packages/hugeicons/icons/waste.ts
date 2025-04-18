import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWasteIcon],svg[hugeicons-waste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M3.75 5h5.43a2 2 0 0 0 1.664-.89l.812-1.22A2 2 0 0 1 13.32 2h4.488a2 2 0 0 1 1.898 1.368L20.25 5m1.5 0h-13"></svg:path><svg:path d="m20.25 5l-.62 9.906q-.031.49-.061.917M5.25 5l.605 9.897c.154 2.414.232 3.62.874 4.489c.317.429.726.791 1.2 1.063c.96.551 2.244.551 4.814.551h2.507m5.5-2a3 3 0 1 0-6 0a3 3 0 0 0 6 0"></svg:path></svg:g>`,
})
export class HugeiconsWasteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
