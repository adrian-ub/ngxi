import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosZendeskIconIcon],svg[logos-zendesk-icon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#03363D" d="M118.25 51.233v142.773H0zm0-51.233c0 32.644-26.481 59.125-59.125 59.125S0 32.645 0 0zm19.5 194.006c0-32.677 26.449-59.125 59.125-59.125S256 161.361 256 194.006zm0-51.266V0H256z"></svg:path>`,
})
export class LogosZendeskIconIcon {
  readonly viewBox = input("0 0 256 195")
  readonly width = input("1.32em")
  readonly height = input("1em")
}
