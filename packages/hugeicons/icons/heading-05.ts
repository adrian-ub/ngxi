import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHeading05Icon],svg[hugeicons-heading-05-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.5 5v14m10-14v14m3-2.5v.5a2 2 0 1 0 4 0v-.5A2.5 2.5 0 0 0 18 14h-1.5v-3h4m-17 1h10" color="currentColor"></svg:path>`,
})
export class HugeiconsHeading05Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
