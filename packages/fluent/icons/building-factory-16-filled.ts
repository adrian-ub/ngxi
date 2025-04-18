import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBuildingFactory16FilledIcon],svg[fluent-building-factory-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.463 2.442A1.5 1.5 0 0 1 2.963 1h1.075a1.5 1.5 0 0 1 1.499 1.442l.423 11A1.5 1.5 0 0 1 4.46 15H2.54a1.5 1.5 0 0 1-1.5-1.558zM6.461 15c.332-.443.52-.998.498-1.596l-.253-6.586l3.487-2.713A.5.5 0 0 1 11 4.5v2.398l3.17-2.774A.5.5 0 0 1 15 4.5v9a1.5 1.5 0 0 1-1.5 1.5zM13 14v-3.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V14z"></svg:path>`,
})
export class FluentBuildingFactory16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
