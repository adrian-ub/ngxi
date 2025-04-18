import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2PrintIcon],svg[fluent-mdl2-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 768q26 0 49 10t41 27t28 41t10 50v896h-512v256H512v-256H0V896q0-26 10-49t27-41t41-28t50-10h384V0h1024v768zm-1280 0h768V128H640zm768 640H640v512h768zm512-512H128v768h384v-384h1024v384h384zM320 1024q26 0 45 19t19 45t-19 45t-45 19t-45-19t-19-45t19-45t45-19"></svg:path>`,
})
export class FluentMdl2PrintIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
