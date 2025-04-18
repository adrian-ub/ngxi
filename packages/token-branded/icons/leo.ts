import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedLeoIcon],svg[token-branded-leo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedLeo0)" d="M16.5 10.682V5.668L11.862 3L9.84 4.1l.822.482l1.174-.624L15.5 6.137V10h-2v1.91zM5 10V7.777L8.685 5.52l3.113 1.664l.012-.032l.385-.707l-3.51-1.993L4.032 7.3L4.02 10zm2.729.714l2.771 1.19V10H7.549l-3.517 1.678L4 16.328l2.009 1.414l.536-.735L5 15.897v-3.761zm5.353 8.75l-1.259.514L8.5 18.23v-3.793h-1v4.307L11.778 21l1.618-.655zM18 16.081V14.5h1v2.02l-4.565 3.33l-2.935-2.36v-2.32L8.852 12.5h5.88L12.5 15.163v1.929l1.955 1.517zm.01-9.694L20 7.975v4.68l-3.838 2.392l-.449-.708L19 12.194V8.362l-1.56-1.177l.57-.803z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedLeo0" x1="12" x2="12" y1="3" y2="21.005" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#F6E93D"></svg:stop><svg:stop offset=".13" stop-color="#F8E330"></svg:stop><svg:stop offset=".35" stop-color="#F7C730"></svg:stop><svg:stop offset=".64" stop-color="#F59C2E"></svg:stop><svg:stop offset=".98" stop-color="#EB5E2C"></svg:stop><svg:stop offset="1" stop-color="#EB5C2C"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedLeoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
