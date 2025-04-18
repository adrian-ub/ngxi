import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiHandPointDownIcon],svg[gravity-ui-hand-point-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiHandPointDown0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M6 2.5L2.263 5.406a1.978 1.978 0 0 0 1.694 3.48L5 8.625v5.433a1.942 1.942 0 0 0 3.838.421L9.5 11.5l2.744-.457A3 3 0 0 0 14.65 7.31L13.5 3zm7.2 5.197l-.872-3.272l-5.858-.39L3.184 6.59a.478.478 0 0 0 .41.84l1.042-.26L6.5 6.704v7.354a.442.442 0 0 0 .874.096l.662-2.98l.22-.987l.997-.167l2.744-.457A1.5 1.5 0 0 0 13.2 7.697m.103-7.195a.75.75 0 0 1-.106 1.496l-7-.5A.75.75 0 1 1 6.303.002z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiHandPointDown0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiHandPointDownIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
