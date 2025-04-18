import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosPayloadIcon],svg[logos-payload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M116.204 0L256 84.031v159.5l-105.265 60.896v-159.5L10.772 61.008zM105.49 171.121v124.463L0 232.13z"></svg:path>`,
})
export class LogosPayloadIcon {
  readonly viewBox = input("0 0 256 305")
  readonly width = input("0.84em")
  readonly height = input("1em")
}
