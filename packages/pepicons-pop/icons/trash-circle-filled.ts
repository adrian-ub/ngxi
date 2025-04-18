import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopTrashCircleFilledIcon],svg[pepicons-pop-trash-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopTrashCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path d="M14.937 7.5h-3.874A2.003 2.003 0 0 1 13 5a2.003 2.003 0 0 1 1.937 2.5"></svg:path><svg:path d="M7.5 8.5a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2z"></svg:path><svg:path fill-rule="evenodd" d="M17.5 21.5a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1zm-2-10a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0zM13 11a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7a.5.5 0 0 0-.5-.5m-3.5.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0z" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopTrashCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopTrashCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
