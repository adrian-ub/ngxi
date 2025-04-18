import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAdzanIcon],svg[hugeicons-adzan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6.593 12c-3.857-5.714 3.573-7.5 5.406-10c1.833 2.5 9.262 4.286 5.403 10zM12 16v2"></svg:path><svg:path d="M6.5 12v4.286c0 2.694 0 4.04.805 4.877C8.111 22 9.407 22 12 22s3.89 0 4.695-.837s.805-2.183.805-4.877V12m2.5 2l1-.5M20 18l1 .5M4 14l-1-.5M4 18l-1 .5"></svg:path></svg:g>`,
})
export class HugeiconsAdzanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
