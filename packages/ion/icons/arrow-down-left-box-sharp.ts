import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionArrowDownLeftBoxSharpIcon],svg[ion-arrow-down-left-box-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M32 480V315.636h32v109.737l43.636-43.637v22.628h22.628L86.627 448h109.737v32zm286.628-264L130.264 404.364H480V32H107.636v349.736L296 193.373z" clip-rule="evenodd"></svg:path>`,
})
export class IonArrowDownLeftBoxSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
