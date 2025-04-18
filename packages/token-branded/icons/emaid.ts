import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedEmaidIcon],svg[token-branded-emaid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#99BCE3" d="m16.8 9.042l-2.4 1.362v5.514L4.2 9.936v2.568c0 .636.336 1.218.882 1.542L16.8 21z"></svg:path><svg:path fill="#5892CD" d="M14.4 15.918v-2.994l-4.5-2.688l9.9-5.982l-2.136-1.062a1.8 1.8 0 0 0-1.698.042L4.2 9.936z"></svg:path><svg:path fill="#2A5789" d="m12.3 11.73l-2.4-1.5l9.9-5.97v13.716c0 .588-.288 1.14-.768 1.47L16.8 21V9.042z"></svg:path></svg:g>`,
})
export class TokenBrandedEmaidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
