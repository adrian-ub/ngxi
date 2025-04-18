import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsBookCheckDuotoneIcon],svg[lets-icons-book-check-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="16" height="18" x="4" y="3" fill="currentColor" fill-opacity=".25" rx="2"></svg:rect><svg:path fill="currentColor" d="M4 19a2 2 0 0 1 2-2h11c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C20 15.398 20 14.932 20 14v3c0 1.886 0 2.828-.586 3.414S17.886 21 16 21H6a2 2 0 0 1-2-2"></svg:path><svg:path stroke="currentColor" stroke-width="1.2" d="m9.5 10.5l1.894 1.894a.15.15 0 0 0 .212 0L15.5 8.5"></svg:path></svg:g>`,
})
export class LetsIconsBookCheckDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
