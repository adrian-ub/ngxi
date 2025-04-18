import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[catppuccinCspellIcon],svg[catppuccin-cspell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#eed49f" stroke-linecap="round" stroke-linejoin="round" d="M8 1.5h4.5c1.108 0 2 .892 2 2V8H8Z"></svg:path><svg:path fill="none" stroke="#ed8796" stroke-linecap="round" stroke-linejoin="round" d="M14.5 10.5v2c0 1.108-.892 2-2 2H8v-4Zm-13 0v2c0 1.108.892 2 2 2h2v-4Z"></svg:path>`,
})
export class CatppuccinCspellIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
