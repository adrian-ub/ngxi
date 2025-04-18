import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightEscalatorWarningSharpIcon],svg[material-symbols-light-escalator-warning-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 5.808q-.698 0-1.195-.497t-.497-1.195t.497-1.196T7.5 2.423t1.195.497t.497 1.196q0 .698-.497 1.195T7.5 5.808m9.154 5.5q-.529 0-.918-.382q-.39-.381-.39-.926q0-.567.39-.937q.389-.37.918-.37q.567 0 .937.37t.37.928t-.37.937t-.937.38M5.73 21.5v-6.57H4.077V7.424h5.63l2.9 7.637l2.643-2.676H19v4.693h-1V21.5h-2.692v-7.715l-1.93 1.907h-1.68L9.5 9.658V21.5z"></svg:path>`,
})
export class MaterialSymbolsLightEscalatorWarningSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
