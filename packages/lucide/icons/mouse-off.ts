import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideMouseOffIcon],svg[lucide-mouse-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v.343m6.218 11.875A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218M19 13.343V9A7 7 0 0 0 8.56 2.902M22 22L2 2"></svg:path>`,
})
export class LucideMouseOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
