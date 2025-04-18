import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedErgIcon],svg[token-branded-erg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" fill-rule="evenodd" d="m12 3l6.363 2.636L21 12l-2.637 6.363L12 21l-6.364-2.637L3 12l2.636-6.364zm0 1.059l5.612 2.33L19.942 12l-2.33 5.612L12 19.942l-5.612-2.33L4.058 12l2.33-5.612zm2.647 4.235H9.353v1.059L11.608 12l-2.255 2.647v1.059h5.294v-1.059h-3.828L13.06 12l-2.24-2.647h3.828z" clip-rule="evenodd"></svg:path>`,
})
export class TokenBrandedErgIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
