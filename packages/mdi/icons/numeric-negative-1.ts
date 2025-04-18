import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiNumericNegative1Icon],svg[mdi-numeric-negative-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7v2h2v8h2V7zm-2 6H5v-2h6z"></svg:path>`,
})
export class MdiNumericNegative1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
