import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsDesktopIcon],svg[radix-icons-desktop-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1 3.25A.25.25 0 0 1 1.25 3h12.5a.25.25 0 0 1 .25.25v7.5a.25.25 0 0 1-.25.25H1.25a.25.25 0 0 1-.25-.25zM1.25 2C.56 2 0 2.56 0 3.25v7.5C0 11.44.56 12 1.25 12h3.823l-.243 1.299a.55.55 0 0 0 .54.651h4.26a.55.55 0 0 0 .54-.651L9.927 12h3.823c.69 0 1.25-.56 1.25-1.25v-7.5C15 2.56 14.44 2 13.75 2zm7.76 10H5.99l-.198 1.05h3.416z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsDesktopIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
