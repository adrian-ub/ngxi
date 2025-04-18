import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsExerciseOutlineIcon],svg[healthicons-exercise-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M31 14a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2h3a1 1 0 0 1 1 1v6h3v2h-3v6a1 1 0 0 1-1 1h-3v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-9H17v9a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-2H8a1 1 0 0 1-1-1v-6H4v-2h3v-6a1 1 0 0 1 1-1h3v-2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v9h14zM13 33h2V15h-2zm-2-15H9v12h2zm26 12V18h2v12zm-2-15v18h-2V15z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsExerciseOutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
