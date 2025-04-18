import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phHourglassBoldIcon],svg[ph-hourglass-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204 75.64V40a20 20 0 0 0-20-20H72a20 20 0 0 0-20 20v36a20.1 20.1 0 0 0 8 16l48 36l-48 36a20.1 20.1 0 0 0-8 16v36a20 20 0 0 0 20 20h112a20 20 0 0 0 20-20v-35.64a20.13 20.13 0 0 0-7.94-16L147.9 128l48.16-36.4A20.13 20.13 0 0 0 204 75.64M180 212H76v-30l52-39l52 39.33Zm0-138.35L128 113L76 74V44h104Z"></svg:path>`,
})
export class PhHourglassBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
