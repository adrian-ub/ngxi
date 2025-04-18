import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ionBookmarkSharpIcon],svg[ion-bookmark-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 480L256 357.41L96 480V32h320Z"></svg:path>`,
})
export class IonBookmarkSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
