import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionBanSharpIcon],svg[ion-ban-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M414.39 97.61A224 224 0 1 0 97.61 414.39A224 224 0 1 0 414.39 97.61M432 256a175.1 175.1 0 0 1-35.8 106.26L149.74 115.8A175.1 175.1 0 0 1 256 80c97.05 0 176 79 176 176m-352 0a175.1 175.1 0 0 1 35.8-106.26L362.26 396.2A175.1 175.1 0 0 1 256 432c-97 0-176-78.95-176-176"></svg:path>`,
})
export class IonBanSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
