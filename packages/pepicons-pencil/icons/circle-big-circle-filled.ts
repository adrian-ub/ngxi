import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilCircleBigCircleFilledIcon],svg[pepicons-pencil-circle-big-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilCircleBigCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:path fill="#000" fill-rule="evenodd" d="M13 4.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17M3.5 13a9.5 9.5 0 1 1 19 0a9.5 9.5 0 0 1-19 0" clip-rule="evenodd"></svg:path></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilCircleBigCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilCircleBigCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
