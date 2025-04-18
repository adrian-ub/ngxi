import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsAggregateIcon],svg[grommet-icons-aggregate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M8 15h7V8a7 7 0 1 0-7 7Zm8-6H9v7a7 7 0 1 0 7-7Z"></svg:path>`,
})
export class GrommetIconsAggregateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
