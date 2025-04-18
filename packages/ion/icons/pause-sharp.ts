import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionPauseSharpIcon],svg[ion-pause-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 432h-80V80h80Zm144 0h-80V80h80Z"></svg:path>`,
})
export class IonPauseSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
