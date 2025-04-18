import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideAnchorIcon],svg[lucide-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 22V8m-7 4H2a10 10 0 0 0 20 0h-3"></svg:path><svg:circle cx="12" cy="5" r="3"></svg:circle></svg:g>`,
})
export class LucideAnchorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
