import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideCopyMinusIcon],svg[lucide-copy-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 15h6"></svg:path><svg:rect width="14" height="14" x="8" y="8" rx="2" ry="2"></svg:rect><svg:path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></svg:path></svg:g>`,
})
export class LucideCopyMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
