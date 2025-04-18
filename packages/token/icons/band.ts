import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBandIcon],svg[token-band-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.875 18.625L12 22l-6.875-3.375V5.356L12 2l3.75 2.4v5.569l-1.875-1.125v-3.45L12 4.4L7 6.731v10.52l5 2.424l5-2.425v-4.312l-6.875-3.6l1.95-1.05l6.8 3.706zm-5.744-7.044l2.22 1.094l-5.226 2.375V9.831L12 10.894v1.562z"></svg:path>`,
})
export class TokenBandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
