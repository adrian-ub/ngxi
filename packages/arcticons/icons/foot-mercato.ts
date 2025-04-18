import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsFootMercatoIcon],svg[arcticons-foot-mercato-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m19.422 15.606l2.17 6.008l-5.376-3.766l-5.145 4.025l1.812-6.31l-5.247-3.91l6.555.087l1.983-6.24l2.07 6.239l6.54.071z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24.64 11.825h15.724l-.014 8.596H24.74v4.399h13.7v7.747h-13.7V42.5H14.147V25.566"></svg:path>`,
})
export class ArcticonsFootMercatoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
