import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAngleObtuseIcon],svg[mdi-angle-obtuse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 19H9.31L4.07 5.36l1.86-.72l3.03 7.86a4.8 4.8 0 0 1 1.75-.33A4.88 4.88 0 0 1 15.58 17H21zm-10.31-2h2.89a2.85 2.85 0 0 0-2.87-2.83c-.37 0-.71.07-1.04.19z"></svg:path>`,
})
export class MdiAngleObtuseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
