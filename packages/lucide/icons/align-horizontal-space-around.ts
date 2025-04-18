import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideAlignHorizontalSpaceAroundIcon],svg[lucide-align-horizontal-space-around-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="6" height="10" x="9" y="7" rx="2"></svg:rect><svg:path d="M4 22V2m16 20V2"></svg:path></svg:g>`,
})
export class LucideAlignHorizontalSpaceAroundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
