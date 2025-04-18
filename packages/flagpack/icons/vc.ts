import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagpackVcIcon],svg[flagpack-vc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill="#FFDC17" d="M8 0h16v24H8z"></svg:path><svg:path fill="#5FBF2B" d="M24 0h8v24h-8z"></svg:path><svg:path fill="#2E42A5" d="M0 0h8v24H0z"></svg:path><svg:path fill="#5FBF2B" d="m19.726 5.6l-3.04 4.463l3.04 4.305l3.04-4.305zm-7.449.079L9 10.063l3.04 4.226l3.04-4.226zm.566 9.31l3.277-4.384l2.803 4.384L16.12 19.5z"></svg:path></svg:g>`,
})
export class FlagpackVcIcon {
  readonly viewBox = input("0 0 32 24")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
