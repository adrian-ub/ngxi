import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilMoveYCircleFilledIcon],svg[pepicons-pencil-move-y-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilMoveYCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.616 9.653a.5.5 0 0 1 .064-.704l4-3.333a.5.5 0 1 1 .64.768l-4 3.333a.5.5 0 0 1-.704-.064"></svg:path><svg:path d="M17.384 9.653a.5.5 0 0 1-.704.064l-4-3.333a.5.5 0 1 1 .64-.768l4 3.333a.5.5 0 0 1 .064.704M13 7.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8a.5.5 0 0 1 .5-.5m4.384 8.846a.5.5 0 0 1-.064.705l-4 3.333a.5.5 0 0 1-.64-.768l4-3.334a.5.5 0 0 1 .704.064"></svg:path><svg:path d="M8.616 16.346a.5.5 0 0 1 .704-.064l4 3.334a.5.5 0 0 1-.64.768l-4-3.333a.5.5 0 0 1-.064-.704"></svg:path><svg:path d="M13 20a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilMoveYCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilMoveYCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
