import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2EMIIcon],svg[fluent-mdl2-e-m-i-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1536 128v1792h-512v-512H896v512H384V128zm-128 128H512v1536h256v-512h384v512h256zM768 640H640V384h128zm256 0H896V384h128zm-256 384H640V768h128zm256 0H896V768h128zm256-384h-128V384h128zm0 384h-128V768h128z"></svg:path>`,
})
export class FluentMdl2EMIIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
