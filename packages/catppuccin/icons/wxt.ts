import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinWxtIcon],svg[catppuccin-wxt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#a6da95" stroke-linecap="round" stroke-linejoin="round" d="M1.5 5.45c0-1 .81-1.81 1.81-1.81h1.81v-.33a1.81 1.81 0 0 1 3.62 0v.33h1.81c1 0 1.81.81 1.81 1.81v1.81h.33a1.81 1.81 0 1 1 0 3.62h-.33v1.81c0 1-.81 1.81-1.81 1.81H8.74v-.33a1.81 1.81 0 1 0-3.62 0v.33H1.5v-3.62h.33a1.81 1.81 0 0 0 0-3.62H1.5Z"></svg:path>`,
})
export class CatppuccinWxtIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
