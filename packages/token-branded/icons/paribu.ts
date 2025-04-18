import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedParibuIcon],svg[token-branded-paribu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#618138" d="M3 21h18L3 3z"></svg:path><svg:path fill="#8FA63C" d="m3 3l18 18V3z"></svg:path><svg:path fill="#fff" d="M14.336 11.072q-.153.279-.405.432q-.253.153-.585.206a4.3 4.3 0 0 1-.69.053h-1.62V8.92h1.62q.358 0 .69.053t.585.206t.405.432t.152.73q0 .453-.152.73m1.645-1.784a2.45 2.45 0 0 0-.533-.906a2.7 2.7 0 0 0-.95-.64q-.582-.241-1.414-.242H7.85v1.422h1.29v2.841H7.85v1.422h1.29V16.5h1.895v-3.315h2.048q.831 0 1.414-.242q.584-.242.95-.64q.366-.396.533-.911t.168-1.049q0-.547-.168-1.055"></svg:path></svg:g>`,
})
export class TokenBrandedParibuIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
