import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7SquareLineVerticalSquareFillIcon],svg[f7-square-line-vertical-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.68 12.579v35.308c0 .705.615 1.266 1.32 1.266s1.338-.561 1.338-1.266V12.579c0-.705-.633-1.248-1.338-1.248s-1.32.543-1.32 1.248M4.16 40.832h12.88c2.767 0 4.16-1.338 4.16-4.124V23.74c0-2.75-1.393-4.106-4.16-4.106H4.16C1.393 19.633 0 20.99 0 23.74v12.97c0 2.785 1.393 4.123 4.16 4.123m34.801 0H51.84c2.767 0 4.16-1.338 4.16-4.124V23.74c0-2.75-1.393-4.106-4.16-4.106H38.961c-2.767 0-4.16 1.357-4.16 4.106v12.97c0 2.785 1.393 4.123 4.16 4.123M4.377 38.101c-1.067 0-1.646-.543-1.646-1.664v-12.39c0-1.14.58-1.682 1.646-1.682h12.445c1.067 0 1.646.542 1.646 1.682v12.39c0 1.121-.58 1.664-1.646 1.664Z"></svg:path>`,
})
export class F7SquareLineVerticalSquareFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
