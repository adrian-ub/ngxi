import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiHandPointLeftIcon],svg[gravity-ui-hand-point-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiHandPointLeft0)"><svg:path fill="currentColor" fill-rule="evenodd" d="m13.5 6l-2.906-3.737a1.978 1.978 0 0 0-3.48 1.694L7.375 5H1.942a1.942 1.942 0 0 0-.421 3.838L4.5 9.5l.457 2.744A3 3 0 0 0 8.69 14.65L13 13.5zm-5.197 7.2l3.272-.872l.39-5.858L9.41 3.184a.478.478 0 0 0-.84.41l.26 1.042l.466 1.864H1.942a.442.442 0 0 0-.096.874l2.98.662l.987.22l.167.997l.457 2.744A1.5 1.5 0 0 0 8.303 13.2m7.195.103a.75.75 0 0 1-1.496-.106l.5-7a.75.75 0 1 1 1.496.106z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiHandPointLeft0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiHandPointLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
