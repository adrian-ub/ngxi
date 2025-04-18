import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerClockHour1FilledIcon],svg[tabler-clock-hour-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34m-5.401 9.576l.052.021l.08.026l.08.019l.072.011L12 13l.076-.003l.135-.02l.082-.02l.103-.039l.073-.035l.078-.046l.06-.042l.08-.069l.083-.088l.062-.083l2-3a1 1 0 1 0-1.664-1.11L13 8.696V7a1 1 0 0 0-.883-.993L12 6a1 1 0 0 0-1 1v5.026l.009.105l.02.107l.04.129l.048.102l.046.078l.042.06l.069.08l.088.083l.083.062l.09.053z"></svg:path>`,
})
export class TablerClockHour1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
