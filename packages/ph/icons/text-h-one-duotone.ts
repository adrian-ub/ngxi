import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextHOneDuotoneIcon],svg[ph-text-h-one-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M224 72v136H56a16 16 0 0 1-16-16V56h168a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M152 56v120a8 8 0 0 1-16 0v-52H48v52a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0v52h88V56a8 8 0 0 1 16 0m75.77 49a8 8 0 0 0-8.21.39l-24 16a8 8 0 1 0 8.88 13.32L216 127v81a8 8 0 0 0 16 0v-96a8 8 0 0 0-4.23-7"></svg:path></svg:g>`,
})
export class PhTextHOneDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
