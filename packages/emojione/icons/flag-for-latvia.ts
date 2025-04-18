import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForLatviaIcon],svg[emojione-flag-for-latvia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#c94747" d="M61.2 39V25C58 11.8 46.2 2 32 2S6 11.8 2.8 25v14C6 52.2 17.8 62 32 62s26-9.8 29.2-23"></svg:path><svg:path fill="#c28fef" d="M61.2 39V25C58 11.8 46.2 2 32 2S6 11.8 2.8 25v14C6 52.2 17.8 62 32 62s26-9.8 29.2-23" opacity=".15"></svg:path><svg:path fill="#fff" d="M2 32c0 2.4.3 4.8.8 7h58.3c.5-2.2.8-4.6.8-7s-.3-4.8-.8-7H2.8c-.5 2.2-.8 4.6-.8 7"></svg:path>`,
})
export class EmojioneFlagForLatviaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
