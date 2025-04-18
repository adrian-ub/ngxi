import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPasteFilledIcon],svg[ix-paste-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.333 42.664H170.667v85.333h106.666zM128 85.331H64v341.333h170.667V213.331H384v-128h-64v85.333H128zm256 170.666l64 64v149.334H277.333V255.997z" clip-rule="evenodd"></svg:path>`,
})
export class IxPasteFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
