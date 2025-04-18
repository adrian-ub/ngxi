import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCreditcardAddIcon],svg[tdesign-creditcard-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3h22v9h-2v-1H3v8h11v2H1zm2 6h18V5H3zm2 5h5v2H5zm16 0v3h3v2h-3v3h-2v-3h-3v-2h3v-3z"></svg:path>`,
})
export class TdesignCreditcardAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
