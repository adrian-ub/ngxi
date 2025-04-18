import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideCornerRightDownIcon],svg[lucide-corner-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m10 15l5 5l5-5"></svg:path><svg:path d="M4 4h7a4 4 0 0 1 4 4v12"></svg:path></svg:g>`,
})
export class LucideCornerRightDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
