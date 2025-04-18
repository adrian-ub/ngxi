import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilDivisionCircleFilledIcon],svg[pepicons-pencil-division-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilDivisionCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M8 13.5a.5.5 0 0 1 0-1h10a.5.5 0 0 1 0 1z"></svg:path><svg:path fill-rule="evenodd" d="M11.5 9a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m2 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0m-2 8a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0m2 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilDivisionCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilDivisionCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
