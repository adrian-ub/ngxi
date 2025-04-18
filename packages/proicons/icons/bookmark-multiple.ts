import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBookmarkMultipleIcon],svg[proicons-bookmark-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M3.75 20.654a.6.6 0 0 0 .916.51l5.308-3.282a1 1 0 0 1 1.052 0l5.308 3.282a.6.6 0 0 0 .916-.51V8.75a3 3 0 0 0-3-3h-7.5a3 3 0 0 0-3 3z"></svg:path><svg:path stroke-linecap="round" d="M20.25 17.65v-8.9a6 6 0 0 0-6-6h-6.5"></svg:path></svg:g>`,
})
export class ProiconsBookmarkMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
