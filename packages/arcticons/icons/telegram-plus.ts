import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTelegramPlusIcon],svg[arcticons-telegram-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 4.5A16.36 16.36 0 0 0 7.638 20.863A23.84 23.84 0 0 0 23.999 43.5v-6.275H24A16.363 16.363 0 0 0 24 4.5m0 21.745V15.48m-5.382 5.383h10.764"></svg:path>`,
})
export class ArcticonsTelegramPlusIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
