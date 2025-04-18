import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerTemperaturePlusFilledIcon],svg[tabler-temperature-plus-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2a3 3 0 0 1 3 3v7.965l.075.056a5 5 0 0 1 1.81 5.01l-.055.227a5 5 0 1 1-7.905-5.237L7 12.965V5a3 3 0 0 1 2.824-2.995zm9 3a1 1 0 0 1 1 1v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2V6a1 1 0 0 1 1-1m-9-1a1 1 0 0 0-1 1v4h2V5a1 1 0 0 0-1-1"></svg:path>`,
})
export class TablerTemperaturePlusFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
