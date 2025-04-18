import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ShowTimeAsIcon],svg[fluent-mdl2-show-time-as-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0h2048v2048H0zm128 768v165l165-165zm0 347v165h165l512-512H475zm1792 74V859l-421 421h330zm-603 91l512-512h-330l-512 512zm-512 0l512-512H987l-512 512zM128 640h1792V128H128z"></svg:path>`,
})
export class FluentMdl2ShowTimeAsIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
