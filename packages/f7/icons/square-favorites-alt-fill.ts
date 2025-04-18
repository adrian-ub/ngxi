import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7SquareFavoritesAltFillIcon],svg[f7-square-favorites-alt-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M42.238 6.426c4.899 0 7.336 2.437 7.336 7.265V42.31c0 4.828-2.437 7.265-7.336 7.265H13.785c-4.875 0-7.36-2.414-7.36-7.265V13.69c0-4.851 2.485-7.265 7.36-7.265ZM33 38H15a2 2 0 1 0 0 4h18a2 2 0 1 0 0-4m8-7H15a2 2 0 1 0 0 4h26a2 2 0 1 0 0-4M14.1 14.239c-1.465 1.645-1.462 4.086-.018 5.961c1.056 1.372 4.408 4.718 4.826 5.088c1.027.91 1.763.981 2.853.018c.132-.116.408-.383.767-.741l.328-.328c1.207-1.217 3.01-3.101 3.755-4.037c1.403-1.759 1.448-4.316-.018-5.961s-3.861-1.647-5.31-.02c-.715.803-.937 1.262-.937 1.262s-.244-.485-.936-1.262c-1.454-1.632-3.845-1.625-5.31.02"></svg:path>`,
})
export class F7SquareFavoritesAltFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
