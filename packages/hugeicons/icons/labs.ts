import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLabsIcon],svg[hugeicons-labs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17.5 21a3.5 3.5 0 0 1-3.5-3.5V3h7v14.5a3.5 3.5 0 0 1-3.5 3.5M22 3h-9m4 4h-3m-4 9.875C10 19.913 8 21 6 21s-4-1.087-4-4.125S6 10 6 10s4 3.837 4 6.875"></svg:path><svg:path d="M14 12c1.083-.866 2.297-2.122 3.771-1.237c1.23.738 2.263-.039 3.229-.763"></svg:path></svg:g>`,
})
export class HugeiconsLabsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
