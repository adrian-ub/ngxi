import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilLeaveCircleFilledIcon],svg[pepicons-pencil-leave-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilLeaveCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M18.347 10.116a.5.5 0 0 1 .704.064l2.083 2.5a.5.5 0 0 1-.768.64l-2.084-2.5a.5.5 0 0 1 .064-.704"></svg:path><svg:path d="M18.347 15.884a.5.5 0 0 1-.065-.704l2.084-2.5a.5.5 0 1 1 .768.64l-2.083 2.5a.5.5 0 0 1-.704.064"></svg:path><svg:path d="M20.5 13a.5.5 0 0 1-.5.5h-7.5a.5.5 0 0 1 0-1H20a.5.5 0 0 1 .5.5m-14-7a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5m0 14a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1H7a.5.5 0 0 1-.5-.5"></svg:path><svg:path d="M16 5.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m0 10a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0v-4a.5.5 0 0 1 .5-.5m-9-10a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilLeaveCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilLeaveCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
