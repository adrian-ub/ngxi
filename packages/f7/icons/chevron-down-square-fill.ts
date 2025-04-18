import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7ChevronDownSquareFillIcon],svg[f7-chevron-down-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.785 49.574h28.453c4.899 0 7.336-2.437 7.336-7.265V13.69c0-4.828-2.437-7.265-7.336-7.265H13.785c-4.875 0-7.36 2.414-7.36 7.265v28.62c0 4.851 2.485 7.265 7.36 7.265m17.25-14.437c-1.547 1.64-3.352 1.64-4.875 0l-9.656-10.242c-.75-.797-.75-1.899-.07-2.602c.75-.773 1.921-.82 2.648-.047l9.516 10.078l9.539-10.078c.68-.773 1.875-.726 2.625.047c.68.703.656 1.805-.07 2.602Z"></svg:path>`,
})
export class F7ChevronDownSquareFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
