import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHealthCare2Icon],svg[streamline-health-care-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.28 9.34a1.91 1.91 0 0 0 0-2.77a2.07 2.07 0 0 0-2.85 0L7 8L5.57 6.57a2.07 2.07 0 0 0-2.85 0a1.91 1.91 0 0 0 0 2.77L7 13.5zM7 4.5a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class StreamlineHealthCare2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
