import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2Devices4Icon],svg[fluent-mdl2-devices-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2048 1664h-256v256H896v-256H640v-640q0-27 10-50t27-40t41-28t50-10h128V512h640V256H384v640h162q-34 60-34 128H347l-211 211q-8 8-8 19t7 18t19 8h358v128H154q-32 0-60-12t-49-33t-33-49t-12-60q0-31 11-59t34-51l211-211V128h1408v384h128v384h128q27 0 50 10t40 27t28 41t10 50zM1024 896h640V640h-640zm640 640h-640v256h640zm256-512H768v512h128v-128h896v128h128zm-960 256q-26 0-45-19t-19-45t19-45t45-19t45 19t19 45t-19 45t-45 19"></svg:path>`,
})
export class FluentMdl2Devices4Icon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
