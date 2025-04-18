import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideCornerRightUpIcon],svg[lucide-corner-right-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m10 9l5-5l5 5"></svg:path><svg:path d="M4 20h7a4 4 0 0 0 4-4V4"></svg:path></svg:g>`,
})
export class LucideCornerRightUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
