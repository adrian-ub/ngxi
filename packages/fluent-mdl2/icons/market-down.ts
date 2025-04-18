import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2MarketDownIcon],svg[fluent-mdl2-market-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 1024h128v640h-640v-128h421l-677-677l-384 384L3 477l90-90l675 674l384-384l768 768z"></svg:path>`,
})
export class FluentMdl2MarketDownIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
