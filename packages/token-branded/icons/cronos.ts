import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedCronosIcon],svg[token-branded-cronos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#051221"><svg:path d="M12.003 3L4.125 7.502v9L12.003 21l7.872-4.499v-9zm5.54 12.168l-5.54 3.165l-5.543-3.165V8.832l5.543-3.165l5.54 3.165z"></svg:path><svg:path d="m15.676 14.104l-3.677 2.1l-3.68-2.1V9.9l3.68-2.103L15.676 9.9l-1.53.875l-2.147-1.228l-2.147 1.228v2.45L12 14.454l2.146-1.228z"></svg:path></svg:g>`,
})
export class TokenBrandedCronosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
