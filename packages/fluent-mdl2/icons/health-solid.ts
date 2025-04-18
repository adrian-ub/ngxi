import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2HealthSolidIcon],svg[fluent-mdl2-health-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1504 128q113 0 212 42t172 116t116 173t43 212q0 58-12 115t-36 110h-463l-192-200l-320 320l-448-448l-320 328H49q-24-53-36-110T1 671q0-113 42-212t116-172t173-116t212-43q109 0 208 41t177 118l95 96l95-96q77-77 176-118t209-41m-96 896h510l-14 16q-7 8-15 17l-865 864l-865-864q-8-8-15-16t-14-17h254l192-184l448 448l320-320z"></svg:path>`,
})
export class FluentMdl2HealthSolidIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
