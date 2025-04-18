import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPowerplugeuIcon],svg[whh-powerplugeu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-767.5-64q26.5 0 45-19t18.5-45.5t-18.5-45t-45-18.5t-45.5 18.5t-19 45t19 45.5t45.5 19m0-896q-26.5 0-45.5 18.5t-19 45t19 45.5t45.5 19t45-19t18.5-45.5t-18.5-45t-45-18.5m383.5 128q-87 0-160.5 43t-116.5 116.5t-43 160.5t43 160.5t116.5 116.5t160.5 43t160.5-43t116.5-116.5t43-160.5t-43-160.5t-116.5-116.5t-160.5-43m383.5-128q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45 19t45.5-19t19-45.5t-19-45t-45.5-18.5m0 768q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45 19t45.5-19t19-45.5t-19-45t-45.5-18.5m-383.5-64q-106 0-181-75t-75-181t75-181t181-75t181 75t75 181t-75 181t-181 75m-127.5-320q-26.5 0-45.5 18.5t-19 45.5t18.5 45.5t45 18.5t45.5-19t19-45.5t-18.5-45t-45-18.5m255.5 0q-27 0-45.5 18.5t-18.5 45.5t18.5 45.5t45 18.5t45.5-19t19-45.5t-18.5-45t-45.5-18.5"></svg:path>`,
})
export class WhhPowerplugeuIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
