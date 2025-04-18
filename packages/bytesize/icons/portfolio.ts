import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizePortfolioIcon],svg[bytesize-portfolio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M29 17v11H3V17M2 8h28v8s-6 4-14 4s-14-4-14-4zm14 14v-4m4-10s0-4-4-4s-4 4-4 4"></svg:path>`,
})
export class BytesizePortfolioIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
