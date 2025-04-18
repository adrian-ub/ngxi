import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTuning4BoldIcon],svg[solar-tuning-4-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a2 2 0 1 1 4 0a2 2 0 0 1-4 0m0 6a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-2 8a2 2 0 1 1 0 4a2 2 0 0 1 0-4m5.25-6a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 0 1.5h-3a.75.75 0 0 1-.75-.75M14 19.25a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 0-1.5zM10.75 4a.75.75 0 0 0-.75-.75H5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 .75-.75M5 11.25a.75.75 0 0 0 0 1.5h3a.75.75 0 0 0 0-1.5zM4.25 20a.75.75 0 0 1 .75-.75h1a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75M19 3.25a.75.75 0 0 1 0 1.5h-1a.75.75 0 0 1 0-1.5z"></svg:path>`,
})
export class SolarTuning4BoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
