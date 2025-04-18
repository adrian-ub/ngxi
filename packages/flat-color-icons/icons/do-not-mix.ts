import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsDoNotMixIcon],svg[flat-color-icons-do-not-mix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00BCD4" d="M26.9 42H17v-9.9z"></svg:path><svg:path fill="#00BCD4" d="M30 6v20.2L19.8 36.4l2.8 2.8L34 27.8V6z"></svg:path><svg:path fill="#2196F3" d="M15.9 31H6v-9.9z"></svg:path><svg:path fill="#2196F3" d="M20.2 14L8.8 25.4l2.8 2.8L21.8 18H41v-4z"></svg:path><svg:path fill="#37474F" d="M3.563 6.396L6.39 3.568l37.966 37.966l-2.828 2.828z"></svg:path>`,
})
export class FlatColorIconsDoNotMixIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
