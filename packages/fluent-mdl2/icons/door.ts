import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2DoorIcon],svg[fluent-mdl2-door-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1664 0v2048H384V0zm-128 128H512v1792h1024zm-192 1024q-26 0-45-19t-19-45t19-45t45-19t45 19t19 45t-19 45t-45 19"></svg:path>`,
})
export class FluentMdl2DoorIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
