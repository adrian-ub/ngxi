import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightKeyboardDoubleArrowLeftRoundedIcon],svg[material-symbols-light-keyboard-double-arrow-left-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.364 12l4.24 4.246q.14.14.153.342t-.153.366q-.16.16-.354.16t-.354-.16l-4.388-4.389q-.131-.13-.184-.267q-.053-.136-.053-.298t.053-.298t.184-.267l4.388-4.389q.14-.14.341-.153t.367.153q.16.16.16.354t-.16.354zm6.1 0l4.24 4.246q.14.14.153.342t-.153.366q-.16.16-.354.16t-.354-.16l-4.388-4.389q-.131-.13-.184-.267q-.053-.136-.053-.298t.053-.298t.184-.267l4.388-4.389q.14-.14.342-.153t.366.153q.16.16.16.354t-.16.354z"></svg:path>`,
})
export class MaterialSymbolsLightKeyboardDoubleArrowLeftRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
