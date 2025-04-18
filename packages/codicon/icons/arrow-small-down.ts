import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconArrowSmallDownIcon],svg[codicon-arrow-small-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.7 8.64l-2.5 2.5h-.7L5 8.64l.7-.71l1.65 1.64V4h1v5.57L10 7.92z"></svg:path>`,
})
export class CodiconArrowSmallDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
