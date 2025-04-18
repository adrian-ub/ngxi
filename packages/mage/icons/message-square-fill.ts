import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageMessageSquareFillIcon],svg[mage-message-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.25 2h-6.5A6.76 6.76 0 0 0 2 8.75v6.5A6.76 6.76 0 0 0 8.75 22h6.5A6.76 6.76 0 0 0 22 15.25v-6.5A6.76 6.76 0 0 0 15.25 2m2.51 11.61a3 3 0 0 1-.22 1.14a3 3 0 0 1-.65 1a2.8 2.8 0 0 1-1 .65a3 3 0 0 1-1.14.22h-1l-.89.89a1.2 1.2 0 0 1-.38.27a1.4 1.4 0 0 1-1 0a1.3 1.3 0 0 1-.42-.3l-.87-.87h-1a2.92 2.92 0 0 1-2.11-.87a3 3 0 0 1-.87-2.1v-3.49a3 3 0 0 1 3-3h5.56a3 3 0 0 1 3 3z"></svg:path>`,
})
export class MageMessageSquareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
