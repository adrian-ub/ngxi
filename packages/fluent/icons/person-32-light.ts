import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPerson32LightIcon],svg[fluent-person-32-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a7 7 0 1 0 0 14a7 7 0 0 0 0-14m-6 7a6 6 0 1 1 12 0a6 6 0 0 1-12 0m-2.5 9A3.5 3.5 0 0 0 4 21.5v.667C4 24.317 6.766 30 16 30s12-5.684 12-7.833V21.5a3.5 3.5 0 0 0-3.5-3.5zM5 21.5A2.5 2.5 0 0 1 7.5 19h17a2.5 2.5 0 0 1 2.5 2.5v.667C27 23.684 24.765 29 16 29S5 23.684 5 22.167z"></svg:path>`,
})
export class FluentPerson32LightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
