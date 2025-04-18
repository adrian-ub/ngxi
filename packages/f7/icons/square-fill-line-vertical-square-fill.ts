import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7SquareFillLineVerticalSquareFillIcon],svg[f7-square-fill-line-vertical-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.68 12.579v35.308c0 .705.615 1.266 1.32 1.266s1.338-.561 1.338-1.266V12.579c0-.705-.633-1.248-1.338-1.248s-1.32.543-1.32 1.248M4.16 40.832h12.88c2.767 0 4.16-1.338 4.16-4.124V23.74c0-2.75-1.393-4.106-4.16-4.106H4.16C1.393 19.633 0 20.99 0 23.74v12.97c0 2.785 1.393 4.123 4.16 4.123m34.801 0H51.84c2.767 0 4.16-1.338 4.16-4.124V23.74c0-2.75-1.393-4.106-4.16-4.106H38.961c-2.767 0-4.16 1.357-4.16 4.106v12.97c0 2.785 1.393 4.123 4.16 4.123"></svg:path>`,
})
export class F7SquareFillLineVerticalSquareFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
