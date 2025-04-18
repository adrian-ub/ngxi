import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTxtIcon],svg[carbon-txt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11h3v12h2V11h3V9h-8zm-1-2h-2l-2 6l-2-6h-2l2.75 7L12 23h2l2-6l2 6h2l-2.75-7zM3 11h3v12h2V11h3V9H3z"></svg:path>`,
})
export class CarbonTxtIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
