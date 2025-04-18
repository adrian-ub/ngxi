import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedTkoIcon],svg[token-branded-tko-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" fill-rule="evenodd" clip-rule="evenodd"><svg:path fill="#17A84B" d="M15.05 6.08c-.737-.521-1.125-1.565-.61-2.305c.435-.623 1.252-.878 1.908-.494c2.473 1.448 4.123 4.034 4.123 7.126a8.474 8.474 0 0 1-6.883 8.323v.677a1.589 1.589 0 1 1-3.177 0v-.677a8.474 8.474 0 0 1-6.882-8.323c0-3.134 1.7-5.788 4.23-7.232c.664-.379 1.482-.114 1.913.517c.519.76.104 1.822-.656 2.34a5.29 5.29 0 0 0-2.31 4.375a5.3 5.3 0 0 0 3.705 5.052v-1.346a1.589 1.589 0 0 1 3.177 0v1.346a5.297 5.297 0 0 0 1.461-9.38m-1.462 4.332a1.589 1.589 0 1 1-3.178 0a1.589 1.589 0 0 1 3.178 0"></svg:path><svg:path fill="#077FA2" d="M12 21a1.59 1.59 0 0 0 1.589-1.588v-.676c3.92-.74 6.883-4.17 6.883-8.285a8.49 8.49 0 0 0-4.026-7.223c-.7-.432-1.585-.14-2.033.549c-.509.784-.089 1.849.672 2.392a5.25 5.25 0 0 1 2.21 4.282c0 2.359-1.558 4.348-3.706 5.017V14.12A1.59 1.59 0 0 0 12 12.53zm0-8.998a1.59 1.59 0 0 0 0-3.177z"></svg:path></svg:g>`,
})
export class TokenBrandedTkoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
