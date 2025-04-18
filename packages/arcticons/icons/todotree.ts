import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTodotreeIcon],svg[arcticons-todotree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.011 12.763h7.674v7.674h-7.674zM5.5 5.637V16.6h11.511m3.837 3.838v7.126h13.705m0 7.124h7.674v7.674h-7.674z"></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M20.848 27.564v10.963h13.705m1.917-12.334l1.645 2.866l4.385-9.443"></svg:path><svg:path d="M38.477 23.727h-3.925V31.4h7.674v-7.674"></svg:path></svg:g>`,
})
export class ArcticonsTodotreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
