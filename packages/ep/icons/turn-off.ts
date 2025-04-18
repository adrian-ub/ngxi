import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epTurnOffIcon],svg[ep-turn-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M329.956 257.138a254.862 254.862 0 0 0 0 509.724h364.088a254.862 254.862 0 0 0 0-509.724zm0-72.818h364.088a327.68 327.68 0 1 1 0 655.36H329.956a327.68 327.68 0 1 1 0-655.36"></svg:path><svg:path fill="currentColor" d="M329.956 621.227a109.227 109.227 0 1 0 0-218.454a109.227 109.227 0 0 0 0 218.454m0 72.817a182.044 182.044 0 1 1 0-364.088a182.044 182.044 0 0 1 0 364.088"></svg:path>`,
})
export class EpTurnOffIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
