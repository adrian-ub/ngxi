import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CellPhoneIcon],svg[fluent-mdl2-cell-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1536 0q27 0 50 10t40 27t28 41t10 50v1792q0 27-10 50t-27 40t-41 28t-50 10H512q-27 0-50-10t-40-27t-28-41t-10-50V128q0-27 10-50t27-40t41-28t50-10zm0 128H512v1792h1024zM896 1664h256v128H896z"></svg:path>`,
})
export class FluentMdl2CellPhoneIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
