import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTextBoxMinusIcon],svg[mdi-text-box-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 17v2h-8v-2zm-10 0v-2H7v2zm5-6H7v2h7.69A5.98 5.98 0 0 0 12 18c0 1.09.29 2.12.8 3H5a2 2 0 0 1-2-2V5c0-1.11.89-2 2-2h14a2 2 0 0 1 2 2v7.8c-.88-.51-1.91-.8-3-.8l-1 .08zm0-2V7H7v2z"></svg:path>`,
})
export class MdiTextBoxMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
