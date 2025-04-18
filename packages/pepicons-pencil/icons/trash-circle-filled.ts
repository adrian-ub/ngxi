import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilTrashCircleFilledIcon],svg[pepicons-pencil-trash-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilTrashCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M11.5 17.999a.5.5 0 1 1-1 0v-6a.5.5 0 0 1 1 0zm2 0a.5.5 0 1 1-1 0v-6a.5.5 0 0 1 1 0zm2 0a.5.5 0 1 1-1 0v-6a.5.5 0 0 1 1 0zm-1-10.5h-3a1.501 1.501 0 0 1 3-.001"></svg:path><svg:path d="M7.5 7.999a.5.5 0 1 1 0-1h11a.5.5 0 0 1 0 1z"></svg:path><svg:path fill-rule="evenodd" d="M17.5 8.5h-9A.5.5 0 0 0 8 9v11a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V9a.5.5 0 0 0-.5-.5M9 19.5v-10h8v10z" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilTrashCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilTrashCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
