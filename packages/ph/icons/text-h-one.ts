import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTextHOneIcon],svg[ph-text-h-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 56v120a8 8 0 0 1-16 0v-52H48v52a8 8 0 0 1-16 0V56a8 8 0 0 1 16 0v52h88V56a8 8 0 0 1 16 0m75.77 49a8 8 0 0 0-8.21.39l-24 16a8 8 0 1 0 8.88 13.32L216 127v81a8 8 0 0 0 16 0v-96a8 8 0 0 0-4.23-7"></svg:path>`,
})
export class PhTextHOneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
