import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFilterIcon],svg[openmoji-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fcea2b" d="M36 10.979H11v5.042L31.5 34.25v21.771l9 4.958V34.25L61 16.021v-5.042z"></svg:path><svg:path fill="#F1B31C" d="m36 57.193l3.268 1.682V33.908l20.5-18.325v-3.412h-10.25v3.854l-13.5 16.833z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M36 10.979H11v5.042L31.5 34.25v21.771l9 4.958V34.25L61 16.021v-5.042z"></svg:path>`,
})
export class OpenmojiFilterIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
