import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7ChevronLeftSquareFillIcon],svg[f7-chevron-left-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.785 49.574h28.453c4.899 0 7.336-2.437 7.336-7.265V13.69c0-4.828-2.437-7.265-7.336-7.265H13.785c-4.875 0-7.36 2.414-7.36 7.265v28.62c0 4.851 2.485 7.265 7.36 7.265m19.688-9.422c-.657.657-1.922.563-2.625-.07l-10.243-9.656c-1.382-1.29-1.382-3.563 0-4.852l10.243-9.656c.773-.727 1.898-.773 2.601-.07c.727.726.82 1.945.047 2.648l-10.125 9.492l10.125 9.54c.727.656.727 1.874-.023 2.624"></svg:path>`,
})
export class F7ChevronLeftSquareFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
