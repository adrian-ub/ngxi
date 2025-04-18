import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionLogoFigmaIcon],svg[ion-logo-figma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M336 176a80 80 0 0 0 0-160H176a80 80 0 0 0 0 160a80 80 0 0 0 0 160a80 80 0 1 0 80 80V176Z"></svg:path><svg:circle cx="336" cy="256" r="80" fill="currentColor"></svg:circle>`,
})
export class IonLogoFigmaIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
