import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsExerciseSharpIcon],svg[material-symbols-exercise-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.975 9.025l-6.05-6.05l1.85-1.85l6.15 6.175zM7.25 22.8L1.2 16.75l1.8-1.8L9.05 21zm4.325-1.4L2.6 12.425L5.425 9.55l2.3 2.3l4.15-4.15L9.6 5.425l2.825-2.875l9.025 9.025l-2.875 2.825l-2.275-2.275l-4.15 4.15l2.3 2.3z"></svg:path>`,
})
export class MaterialSymbolsExerciseSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
