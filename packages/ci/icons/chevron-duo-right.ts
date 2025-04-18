import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciChevronDuoRightIcon],svg[ci-chevron-duo-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.414 18.01l-1.415-1.413l4.6-4.6l-4.6-4.6l1.415-1.407l6.01 6.01l-6.009 6.01h-.001Zm-5.425 0l-1.414-1.413l4.6-4.6l-4.6-4.593L6.989 5.99L13 12l-6.01 6.01h-.001Z"></svg:path>`,
})
export class CiChevronDuoRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
