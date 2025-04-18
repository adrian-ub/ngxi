import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsExerciseIcon],svg[healthicons-exercise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M32 14h4v20h-4v-9H16v9h-4V14h4v9h16zM6 23v-6h4v14H6v-6H4v-2zm38 2h-2v6h-4V17h4v6h2z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsExerciseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
