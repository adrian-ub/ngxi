import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChartMultiple32FilledIcon],svg[fluent-chart-multiple-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.948 2.014Q17.222 2 17.5 2C23.299 2 28 6.701 28 12.5q0 .277-.014.552a1 1 0 0 1-.999.948H18a2 2 0 0 1-2-2V3.013a1 1 0 0 1 .948-.999M14 7.54c0-.844-.72-1.577-1.632-1.48C7.101 6.626 3 11.083 3 16.5C3 22.3 7.701 27 13.5 27q1.028-.001 2-.19V25a3.5 3.5 0 0 1 5.004-3.161a3.5 3.5 0 0 1 3.305-3.334q.083-.43.13-.873c.099-.913-.635-1.632-1.479-1.632H17a3 3 0 0 1-3-3zM27 18a2 2 0 1 1 4 0v11a2 2 0 1 1-4 0zm-5 4a2 2 0 1 1 4 0v7a2 2 0 1 1-4 0zm-3 1a2 2 0 0 0-2 2v4a2 2 0 1 0 4 0v-4a2 2 0 0 0-2-2"></svg:path>`,
})
export class FluentChartMultiple32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
