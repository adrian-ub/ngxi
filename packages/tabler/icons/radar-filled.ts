import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerRadarFilledIcon],svg[tabler-radar-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10a2 2 0 0 1 1.678.911l.053.089H21l.117.007A1 1 0 0 1 22 12c0 5.523-4.477 10-10 10a1 1 0 0 1-1-1v-7.269l-.089-.053a2 2 0 0 1-.906-1.529L10 12a2 2 0 0 1 2-2m9.428-1.334a1 1 0 0 1-1.884.668A8 8 0 1 0 9.337 19.552a1 1 0 0 1-.666 1.886A10 10 0 1 1 21.428 8.666M16.8 8.4a1 1 0 0 1-1.6 1.2a4 4 0 1 0-5.6 5.6a1 1 0 0 1-1.2 1.6a6 6 0 1 1 8.4-8.4"></svg:path>`,
})
export class TablerRadarFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
