import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedRampIcon],svg[token-branded-ramp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#00B5D1" d="M14.368 13.455L12 14.905l-2.369-1.45v-2.906L12 9.092l2.368 1.457z"></svg:path><svg:path fill="#0D285A" d="M12 3L4.42 7.503v8.994L12 21l7.579-4.503V7.503zM8.21 14.18V9.797L12 7.641l3.79 2.156v4.384l-3.818 2.186zm0 2.527v-1.522l5.056 2.964l-1.266.756zm9.474-1.255L14.11 17.65l-1.31-.784l3.937-2.197v-5.36L12 6.672L7.263 9.309v6.77l-.947-.688V8.608L12 5.218l5.684 3.33z"></svg:path></svg:g>`,
})
export class TokenBrandedRampIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
