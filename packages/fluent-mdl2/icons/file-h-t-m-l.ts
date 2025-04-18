import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FileHTMLIcon],svg[fluent-mdl2-file-h-t-m-l-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 1920h256v128H128V0h1115l512 512h37v768h-128V640h-512V128H256zM1573 512l-293-293v293zM877 1517l-211 211l211 211l-90 90l-301-301l301-301zm339 19q40 0 75 15t61 41t41 61t15 75t-15 75t-41 61t-61 41t-75 15t-75-15t-61-41t-41-61t-15-75t15-75t41-61t61-41t75-15m730 192l-301 301l-90-90l211-211l-211-211l90-90z"></svg:path>`,
})
export class FluentMdl2FileHTMLIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
