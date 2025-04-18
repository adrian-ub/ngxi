import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2FooterIcon],svg[fluent-mdl2-footer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 0h1792v2048H128zm1664 1920V128H256v1792zm-128-640v512H384v-512zm-128 384v-256H512v256z"></svg:path>`,
})
export class FluentMdl2FooterIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
