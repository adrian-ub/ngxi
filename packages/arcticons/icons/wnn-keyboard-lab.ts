import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWnnKeyboardLabIcon],svg[arcticons-wnn-keyboard-lab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.503 11.516c-4.389-1.856-5.812 6.41-6.095 8.528c-.325 2.424-.152 27.62 11.819.83c-2.674 15.498 1.018 25.59 13.563 2.286"></svg:path>`,
})
export class ArcticonsWnnKeyboardLabIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
