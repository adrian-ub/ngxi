import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSearchDollarIcon],svg[streamline-search-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.5 12.5a6 6 0 1 0 0-12a6 6 0 0 0 0 12m4.24-1.76l2.76 2.76"></svg:path><svg:path d="M3.5 5.849c0-.489.396-.885.885-.885h4.23c.489 0 .885.396.885.885v2.516a.884.884 0 0 1-.885.885h-4.23a.884.884 0 0 1-.885-.885zM5.214 4.76v-.51a1 1 0 0 1 1-1h.572a1 1 0 0 1 1 1v.51"></svg:path></svg:g>`,
})
export class StreamlineSearchDollarIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
