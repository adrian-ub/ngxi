import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSend20RegularIcon],svg[fluent-send-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.184 2.112a.5.5 0 0 1 .54-.06l15 7.5a.5.5 0 0 1 0 .895l-15 7.5a.5.5 0 0 1-.707-.576L3.983 10L2.017 2.629a.5.5 0 0 1 .167-.517m2.7 8.388L3.27 16.556L16.382 10L3.269 3.444L4.884 9.5H11.5a.5.5 0 1 1 0 1z"></svg:path>`,
})
export class FluentSend20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
