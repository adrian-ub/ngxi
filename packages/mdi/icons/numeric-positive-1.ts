import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNumericPositive1Icon],svg[mdi-numeric-positive-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7v2h2v8h2V7zm-2 6H9v2H7v-2H5v-2h2V9h2v2h2z"></svg:path>`,
})
export class MdiNumericPositive1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
