import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[logosLogstashIcon],svg[logos-logstash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FEC514" d="M122.435 189.217H0V0h11.13c61.474 0 111.305 49.83 111.305 111.304z"></svg:path><svg:path fill="#343741" d="M116.87 306.086h5.565V189.217H0c0 64.545 52.324 116.87 116.87 116.87"></svg:path><svg:path fill="#00BFB3" d="M150.261 306.086H256V189.217H150.261z"></svg:path>`,
})
export class LogosLogstashIcon {
  readonly viewBox = input("0 0 256 307")
  readonly width = input("0.84em")
  readonly height = input("1em")
}
