import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGrapesIcon],svg[hugeicons-grapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.83 18a3 3 0 1 1-5.659 0"></svg:path><svg:path d="M11.236 13a3 3 0 1 1-4.472 0"></svg:path><svg:path d="M17.236 13a3 3 0 1 1-4.472 0"></svg:path><svg:path d="M15 10a3 3 0 1 0 6 0a3 3 0 0 0-6 0m-6 0a3 3 0 1 0 6 0a3 3 0 0 0-6 0m-6 0a3 3 0 1 0 6 0a3 3 0 0 0-6 0"></svg:path><svg:path d="M12 7c0-1.667.8-5 4-5"></svg:path></svg:g>`,
})
export class HugeiconsGrapesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
