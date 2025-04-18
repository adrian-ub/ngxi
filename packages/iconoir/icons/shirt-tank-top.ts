import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirShirtTankTopIcon],svg[iconoir-shirt-tank-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18 21H6s1.66-4.825 1.5-8c-.1-1.989-1.524-3.079-1-5c.23-.842 1-2 1-2S9 7 12 7s4.5-1 4.5-1s.77 1.158 1 2c.524 1.921-.9 3.011-1 5c-.16 3.175 1.5 8 1.5 8M7.5 6V3m9 3V3"></svg:path>`,
})
export class IconoirShirtTankTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
