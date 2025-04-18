import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignPenBrushIcon],svg[tdesign-pen-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.999 22h3.623a3 3 0 0 0 2.12-.878l14.79-14.789l-4.866-4.865L2.878 16.256a3 3 0 0 0-.879 2.122zm2-2v-1.622a1 1 0 0 1 .293-.707l2.158-2.158l2.037 2.036l-2.158 2.158a1 1 0 0 1-.707.293zm5.902-3.865l-2.037-2.037l9.802-9.801l2.037 2.036z"></svg:path>`,
})
export class TdesignPenBrushIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
