import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsKeyboardIcon],svg[radix-icons-keyboard-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 4h-12a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5m-12-1A1.5 1.5 0 0 0 0 4.5v6A1.5 1.5 0 0 0 1.5 12h12a1.5 1.5 0 0 0 1.5-1.5v-6A1.5 1.5 0 0 0 13.5 3zM2 5h1v1H2zm3 0H4v1h1zm1 0h1v1H6zm3 0H8v1h1zm1 0h1v1h-1zm3 0h-1v1h1zm-2 2h1v1h-1zm2 2h-1v1h1zM9 7h1v1H9zM8 7H7v1h1zM5 7h1v1H5zM4 7H3v1h1zM2 9h1v1H2zm9 0H4v1h7z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsKeyboardIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
