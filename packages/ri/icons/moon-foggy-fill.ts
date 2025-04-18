import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMoonFoggyFillIcon],svg[ri-moon-foggy-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 20.335V18h-2v-4H3.332A9.5 9.5 0 0 1 3 11.5c0-4.56 3.213-8.37 7.5-9.289a8 8 0 0 0 11.49 9.724a9.5 9.5 0 0 1-5.99 8.4M7 20h7v2H7zm-5-4h10v2H2z"></svg:path>`,
})
export class RiMoonFoggyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
