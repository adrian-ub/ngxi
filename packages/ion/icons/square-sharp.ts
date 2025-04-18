import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionSquareSharpIcon],svg[ion-square-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 48h416v416H48z"></svg:path>`,
})
export class IonSquareSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
