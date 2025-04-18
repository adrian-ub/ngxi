import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiHandPointRightIcon],svg[gravity-ui-hand-point-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiHandPointRight0)"><svg:path fill="currentColor" fill-rule="evenodd" d="m2.5 6l2.906-3.737a1.978 1.978 0 0 1 3.48 1.694L8.626 5h5.432a1.942 1.942 0 0 1 .421 3.838L11.5 9.5l-.457 2.744A3 3 0 0 1 7.31 14.65L3 13.5zm5.197 7.2l-3.272-.872l-.39-5.858L6.59 3.184a.478.478 0 0 1 .84.41l-.26 1.042L6.704 6.5h7.354a.442.442 0 0 1 .096.874l-2.98.662l-.987.22l-.166.997l-.458 2.744A1.5 1.5 0 0 1 7.697 13.2m-7.195.103a.75.75 0 0 0 1.496-.106l-.5-7a.75.75 0 1 0-1.496.106z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiHandPointRight0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiHandPointRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
