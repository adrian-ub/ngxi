import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiVisGaugeIcon],svg[oui-vis-gauge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.877 5.847l-1.02 1.02a.5.5 0 0 1-.708-.707l1.1-1.099q-.075-.08-.152-.157A6.47 6.47 0 0 0 8 3.019V4.5a.5.5 0 0 1-1 0V3.019a6.47 6.47 0 0 0-4.261 2.055l1.07 1.071a.5.5 0 0 1-.706.707l-.99-.99A6.46 6.46 0 0 0 1.018 10H2.5a.5.5 0 1 1 0 1H1.174q.125.53.337 1.03a.5.5 0 1 1-.922.39A7.5 7.5 0 0 1 0 9.5a7.48 7.48 0 0 1 2.197-5.304A7.5 7.5 0 0 1 7.5 2a7.5 7.5 0 0 1 5.304 2.197A7.48 7.48 0 0 1 15 9.5a7.5 7.5 0 0 1-.59 2.92a.5.5 0 0 1-.92-.39q.21-.5.336-1.03H12.5a.5.5 0 1 1 0-1h1.481a6.48 6.48 0 0 0-1.104-4.153m-6.041 5.317a.993.993 0 0 1-.01-1.404c.384-.385 2.882-2.002 3.149-1.735s-1.35 2.765-1.735 3.15a.993.993 0 0 1-1.404-.01"></svg:path>`,
})
export class OuiVisGaugeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
