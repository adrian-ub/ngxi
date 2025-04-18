import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHeading02Icon],svg[hugeicons-heading-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.5 5v14m10-14v14m7 0h-4v-.31c0-.438 0-.657.087-.852c.086-.194.249-.34.575-.634l2.605-2.344c.467-.42.733-1.018.733-1.646V13a2 2 0 1 0-4 0v.4M3.5 12h10" color="currentColor"></svg:path>`,
})
export class HugeiconsHeading02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
