import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsEnterIcon],svg[radix-icons-enter-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 1a.5.5 0 0 0 0 1H12v11H4.5a.5.5 0 0 0 0 1H12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zm2.104 3.896a.5.5 0 1 0-.708.708L7.293 7H.5a.5.5 0 0 0 0 1h6.793L5.896 9.396a.5.5 0 0 0 .708.708l2.25-2.25a.5.5 0 0 0 0-.708z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsEnterIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
