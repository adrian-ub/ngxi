import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionArrowUpLeftBoxSharpIcon],svg[ion-arrow-up-left-box-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M32 32h164.364v32H86.627l43.637 43.636h-22.628v22.628L64 86.627v109.737H32zm264 286.627L107.636 130.264V480H480V107.636H130.264L318.628 296z" clip-rule="evenodd"></svg:path>`,
})
export class IonArrowUpLeftBoxSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
