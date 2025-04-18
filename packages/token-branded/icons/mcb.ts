import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedMcbIcon],svg[token-branded-mcb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#59EFEC" d="M3.449 16.95c-.343 0-.558-.398-.391-.72l4.39-8.44c.238-.458.686-.74 1.172-.74h2.032c.342 0 .558.398.39.72L6.65 16.21c-.238.457-.686.74-1.172.74z"></svg:path><svg:path fill="#D98041" d="M11.33 16.95H9.298c-.343 0-.558-.397-.39-.72l4.39-8.44c.237-.457.686-.74 1.172-.74h2.03c.343 0 .559.398.391.72L12.5 16.21c-.237.456-.685.74-1.171.74"></svg:path><svg:path fill="#fff" d="m17.197 10.436l-.983 1.906a1.5 1.5 0 0 0 0 1.361l1.308 2.536c.227.439.654.71 1.116.71h1.935c.326 0 .532-.38.372-.69l-3.004-5.823a.41.41 0 0 0-.744 0"></svg:path></svg:g>`,
})
export class TokenBrandedMcbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
