import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsEyeFillIcon],svg[lets-icons-eye-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.98 10.27C4.364 8.199 7.268 5 12 5s7.635 3.198 9.02 5.27c.465.697.698 1.044.677 1.687s-.288.99-.822 1.685C19.286 15.71 16.113 19 12 19s-7.286-3.29-8.875-5.358c-.534-.695-.8-1.042-.822-1.685s.211-.99.676-1.686M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsEyeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
