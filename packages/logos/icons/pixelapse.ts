import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosPixelapseIcon],svg[logos-pixelapse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M.03 0H256v256H.03V0z" fill="#2B87D4"></svg:path><svg:path d="M84 68h24v24H84V68z" fill="#FFF"></svg:path><svg:path d="M116 68h24v24h-24V68z" fill="#FFF"></svg:path><svg:path d="M84 132h24v24H84v-24z" fill="#FFF"></svg:path><svg:path d="M84 164h24v24H84v-24z" fill="#FFF"></svg:path><svg:path d="M116 132h24v24h-24v-24z" fill="#FFF"></svg:path><svg:path d="M148 100h24v24h-24v-24z" fill="#FFF"></svg:path>`,
})
export class LogosPixelapseIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
