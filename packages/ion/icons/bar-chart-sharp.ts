import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionBarChartSharpIcon],svg[ion-bar-chart-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 496H16V16h32v448h448z"></svg:path><svg:path fill="currentColor" d="M192 432H80V208h112Zm144 0H224V160h112Zm143.64 0h-112V96h112Z"></svg:path>`,
})
export class IonBarChartSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
