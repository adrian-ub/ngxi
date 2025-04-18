import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBuildingFactory20FilledIcon],svg[fluent-building-factory-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.938 3.4A1.5 1.5 0 0 1 4.435 2h1.129a1.5 1.5 0 0 1 1.497 1.4l.866 13A1.5 1.5 0 0 1 6.431 18H3.568a1.5 1.5 0 0 1-1.496-1.6zM8.431 18c.346-.46.536-1.043.494-1.666l-.521-7.82l3.761-3.386A.5.5 0 0 1 13 5.5v3.377l4.165-3.749A.5.5 0 0 1 18 5.5v11a1.5 1.5 0 0 1-1.5 1.5zM16 17v-4.2a.8.8 0 0 0-.8-.8h-3.4a.8.8 0 0 0-.8.8V17z"></svg:path>`,
})
export class FluentBuildingFactory20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
