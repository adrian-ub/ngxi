import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsArrowAngularTopLeftIcon],svg[lineicons-arrow-angular-top-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.782 5.992a.75.75 0 0 1 .549-.239l8.995-.003a.75.75 0 1 1 0 1.5l-7.19.002l10.72 10.72a.75.75 0 0 1-1.062 1.06L7.081 8.318l-.003 7.177a.75.75 0 0 1-1.5-.001l.003-8.93a.75.75 0 0 1 .2-.572"></svg:path>`,
})
export class LineiconsArrowAngularTopLeftIcon {
  readonly viewBox = input("0 0 25 25")
  readonly width = input("1em")
  readonly height = input("1em")
}
