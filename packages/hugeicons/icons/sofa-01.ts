import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSofa01Icon],svg[hugeicons-sofa-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M6 17v3m12-3v3m2-11c0-1.87 0-2.804-.402-3.5A3 3 0 0 0 18.5 4.402C17.804 4 16.87 4 15 4H9c-1.87 0-2.804 0-3.5.402A3 3 0 0 0 4.402 5.5C4 6.196 4 7.13 4 9"></svg:path><svg:path d="M20 9a2 2 0 0 0-2 2v2c0 .827-.173 1-1 1H7c-.827 0-1-.173-1-1v-2a2 2 0 1 0-3 1.732V13c0 1.886 0 2.828.586 3.414S5.114 17 7 17h10c1.886 0 2.828 0 3.414-.586S21 14.886 21 13v-.268A2 2 0 0 0 20 9"></svg:path></svg:g>`,
})
export class HugeiconsSofa01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
