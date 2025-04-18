import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiLetterTSolidIcon],svg[mynaui-letter-t-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6a1 1 0 0 0 0 2h2.75v9a1 1 0 1 0 2 0V8h2.75a1 1 0 1 0 0-2z"></svg:path>`,
})
export class MynauiLetterTSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
