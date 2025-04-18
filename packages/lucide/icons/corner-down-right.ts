import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideCornerDownRightIcon],svg[lucide-corner-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m15 10l5 5l-5 5"></svg:path><svg:path d="M4 4v7a4 4 0 0 0 4 4h12"></svg:path></svg:g>`,
})
export class LucideCornerDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
