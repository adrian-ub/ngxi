import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiFlagOneSolidIcon],svg[mynaui-flag-one-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 3A.75.75 0 0 0 4 3v18a.75.75 0 0 0 1.5 0v-6.438l13.241-3.883c1.679-.492 1.679-2.866 0-3.358L5.5 3.438z"></svg:path>`,
})
export class MynauiFlagOneSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
