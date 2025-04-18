import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashPaginationLightIcon],svg[stash-pagination-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m4 10l-2 2l2 2m16-4l2 2l-2 2"></svg:path><svg:rect width="10" height="10" x="7" y="7" fill="currentColor" rx="3"></svg:rect><svg:rect width="10" height="10" x="7" y="7" fill="currentColor" rx="3"></svg:rect></svg:g>`,
})
export class StashPaginationLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
