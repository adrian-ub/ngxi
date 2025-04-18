import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsExerciseNegativeIcon],svg[healthicons-exercise-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsExerciseNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM36 14h-4v9H16v-9h-4v20h4v-9h16v9h4zM6 17v6H4v2h2v6h4V17zm36 8h2v-2h-2v-6h-4v14h4z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsExerciseNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsExerciseNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
