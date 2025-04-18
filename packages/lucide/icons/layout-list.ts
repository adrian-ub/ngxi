import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideLayoutListIcon],svg[lucide-layout-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="7" height="7" x="3" y="3" rx="1"></svg:rect><svg:rect width="7" height="7" x="3" y="14" rx="1"></svg:rect><svg:path d="M14 4h7m-7 5h7m-7 6h7m-7 5h7"></svg:path></svg:g>`,
})
export class LucideLayoutListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
