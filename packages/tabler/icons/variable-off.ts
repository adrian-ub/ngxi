import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerVariableOffIcon],svg[tabler-variable-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4.675 4.68C2.505 9.456 2.613 14.272 5 20M19 4c1.959 3.917 2.383 7.834 1.272 12.232m-.983 3.051q-.14.357-.289.717m-7.304-8.304q.141.385.32.831C13 15 13 16 14 16h1"></svg:path><svg:path d="M8 16c1.5 0 3-2 4-3.5m2.022-2.514C14.651 9.404 15.326 9 16 9M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerVariableOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
