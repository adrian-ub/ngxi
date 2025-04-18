import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsWorkoutSportIcon],svg[hugeicons-workout-sport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 4.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M5 12l1.476-2.326c.26-.41.391-.616.562-.783c.17-.167.374-.29.782-.534l.922-.553c.862-.518 1.293-.777 1.77-.802s.93.187 1.839.61l1.695.792c.373.174.56.26.723.383q.174.13.318.295c.135.156.24.34.45.708c.37.647.555.97.816 1.199c.184.16.394.285.62.368c.32.118.68.118 1.398.118H19M11.5 7.5L8 14m0 0l1.447 2.026a2 2 0 0 1-.31 2.667L6.5 21M8 14h3.5m5.5 4l-2.4-3.2A2 2 0 0 0 13 14h-1.5m0 0L15 9" color="currentColor"></svg:path>`,
})
export class HugeiconsWorkoutSportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
