import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiKotlinIcon],svg[openmoji-kotlin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8967aa" d="M11.57 11.58v48.84h48.86L35.49 35.64l24.94-24.06z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.57 11.58v48.84h48.86L35.49 35.64l24.94-24.06z"></svg:path>`,
})
export class OpenmojiKotlinIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
