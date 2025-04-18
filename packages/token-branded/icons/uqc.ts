import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedUqcIcon],svg[token-branded-uqc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#E85C50" d="M15.194 14.322V3.29l2.903 5.806v11.418c-.87.195-2.903.195-2.903.195zl-1.742 3.484H10.55l-1.742-3.484v6.387s-1.786.03-2.903-.195V9.096L8.807 3.29v11.032z"></svg:path><svg:path fill="#CF3339" d="M5.903 20.514C4.694 20.232 3 19.037 3 17.823V3.29l2.903 5.806zm12.194 0C19.306 20.232 21 19.037 21 17.823V3.29l-2.903 5.806z"></svg:path><svg:path fill="#E33936" d="M5.903 9.096L3 3.29h5.806zm12.194 0L21 3.29h-5.806z"></svg:path><svg:path fill="#CF3339" d="M15.193 20.708H8.806l1.742-2.903h2.903z"></svg:path><svg:path fill="#E33937" d="m10.548 17.804l-1.742 2.903V14.32zm4.645 2.903l-1.742-2.903l1.742-3.484z"></svg:path></svg:g>`,
})
export class TokenBrandedUqcIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
