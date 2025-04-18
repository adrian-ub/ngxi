import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laVectorSquareIcon],svg[la-vector-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v7h2v8H5v7h7v-2h8v2h7v-7h-2v-8h2V5h-7v2h-8V5zm2 2h3v3H7zm15 0h3v3h-3zM12 9h8v3h3v8h-3v3h-8v-3H9v-8h3zM7 22h3v3H7zm15 0h3v3h-3z"></svg:path>`,
})
export class LaVectorSquareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
