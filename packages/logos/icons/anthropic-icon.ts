import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosAnthropicIconIcon],svg[logos-anthropic-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#181818" d="m147.487 0l70.081 175.78H256L185.919 0zM66.183 106.221l23.98-61.774l23.98 61.774zM70.07 0L0 175.78h39.18l14.33-36.914h73.308l14.328 36.914h39.179L110.255 0z"></svg:path>`,
})
export class LogosAnthropicIconIcon {
  readonly viewBox = input("0 0 256 176")
  readonly width = input("1.46em")
  readonly height = input("1em")
}
