import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiCaretLeftIcon],svg[gravity-ui-caret-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.295 4.177a.73.73 0 0 1 1.205.552v6.542a.73.73 0 0 1-1.205.552L5.786 8.8a1 1 0 0 1-.347-.757v-.084a1 1 0 0 1 .347-.757z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiCaretLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
