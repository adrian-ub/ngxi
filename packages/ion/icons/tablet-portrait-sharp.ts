import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionTabletPortraitSharpIcon],svg[ion-tablet-portrait-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M430 0H82a18 18 0 0 0-18 18v476a18 18 0 0 0 18 18h348a18 18 0 0 0 18-18V18a18 18 0 0 0-18-18M100 448V64h312v384Z"></svg:path>`,
})
export class IonTabletPortraitSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
