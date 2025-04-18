import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cuidaArrowDownOutlineIcon],svg[cuida-arrow-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 18.714a1 1 0 0 1-1-1v-12.5a1 1 0 1 1 2 0v12.5a1 1 0 0 1-1 1" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M12 20.214a1 1 0 0 1-.707-.292l-4.5-4.5a1 1 0 0 1 1.414-1.415L12 17.8l3.793-3.793a1 1 0 0 1 1.414 1.415l-4.5 4.5a1 1 0 0 1-.707.292" clip-rule="evenodd"></svg:path>`,
})
export class CuidaArrowDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
