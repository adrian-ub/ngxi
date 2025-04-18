import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsNoSymbol20SolidIcon],svg[heroicons-no-symbol-20-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m5.965 4.904l9.131 9.131a6.5 6.5 0 0 0-9.131-9.131m8.07 10.192L4.904 5.965a6.5 6.5 0 0 0 9.131 9.131M4.343 4.343a8 8 0 1 1 11.314 11.314A8 8 0 0 1 4.343 4.343" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsNoSymbol20SolidIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
