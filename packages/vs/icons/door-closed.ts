import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vsDoorClosedIcon],svg[vs-door-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 8v1600h1200V8zm194 865q-28 0-50-20.5T122 803t22-50t50-21q26 0 49 21.5t23 49.5t-22.5 49t-49.5 21"></svg:path>`,
})
export class VsDoorClosedIcon {
  readonly viewBox = input("0 0 1216 1632")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
