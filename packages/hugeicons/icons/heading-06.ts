import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHeading06Icon],svg[hugeicons-heading-06-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.5 5v14m10-14v14m3-2a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0 0v-4a2 2 0 1 1 4 0m-17-1h10" color="currentColor"></svg:path>`,
})
export class HugeiconsHeading06Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
