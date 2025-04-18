import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiChevronsExpandHorizontalIcon],svg[gravity-ui-chevrons-expand-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiChevronsExpandHorizontal0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M11.891 3.58a.75.75 0 0 0-1.06 1.061L14.188 8l-3.353 3.354a.75.75 0 1 0 1.06 1.06L15.78 8.53a.75.75 0 0 0 0-1.06zM4.11 12.42a.75.75 0 0 0 1.06-1.061L1.811 8l3.353-3.354a.75.75 0 1 0-1.06-1.06L.22 7.47a.75.75 0 0 0 0 1.06z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiChevronsExpandHorizontal0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiChevronsExpandHorizontalIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
