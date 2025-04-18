import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedL3xIcon],svg[token-branded-l3x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#48EA98" d="M18.3 16.409v-.365h-4.606v.573l-.001.037q-.016.233-.252.249l-.038.001H5.7v2.53L7.765 21h5.982q4.5-.051 4.552-4.489zM7.62 13.435v-3.392h10.587v3.392zM13.745 3H8.03L5.965 4.565v2.53h7.438l.038.002q.133.009.196.087q.048.06.056.162l.001.037v.574H18.3v-.469Q18.247 3.05 13.744 3"></svg:path>`,
})
export class TokenBrandedL3xIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
