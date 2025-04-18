import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siMicFillIcon],svg[si-mic-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 2C9.769 2 8 3.757 8 5.828v6.344C8 14.242 9.769 16 12 16s4-1.758 4-3.828V5.828C16 3.758 14.231 2 12 2" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M13 20.945V23a1 1 0 1 1-2 0v-2.055A9 9 0 0 1 3 12a1 1 0 1 1 2 0a7 7 0 1 0 14 0a1 1 0 1 1 2 0a9 9 0 0 1-8 8.945"></svg:path>`,
})
export class SiMicFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
