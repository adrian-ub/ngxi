import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLetterGgIcon],svg[carbon-letter-gg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4v2h-5v2h5a2 2 0 0 0 2-2V13zm4 8h-4v-6h4zm-8 2H9a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h6v2H9v10h4v-4h-2v-2h4z"></svg:path>`,
})
export class CarbonLetterGgIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
