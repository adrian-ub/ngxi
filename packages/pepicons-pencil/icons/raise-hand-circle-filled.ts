import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilRaiseHandCircleFilledIcon],svg[pepicons-pencil-raise-hand-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilRaiseHandCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M14.5 8.5a3 3 0 1 0 0 6a3 3 0 0 0 0-6m-4 3a4 4 0 1 1 8 0a4 4 0 0 1-8 0"></svg:path><svg:path d="M5.5 7a2 2 0 1 1 4 0v3.272c0 1 .35 1.967.99 2.735l1.394 1.673a.5.5 0 0 1-.768.64l-1.394-1.673A5.27 5.27 0 0 1 8.5 10.272V7a1 1 0 0 0-2 0v3.75a4.5 4.5 0 0 0 .53 2.118l3.411 6.397a.5.5 0 0 1-.882.47l-3.412-6.397A5.5 5.5 0 0 1 5.5 10.75z"></svg:path><svg:path d="M11 15a.5.5 0 0 1 .5-.5H14a5.5 5.5 0 0 1 5.5 5.5v2a.5.5 0 0 1-1 0v-2a4.5 4.5 0 0 0-4.5-4.5h-2.5a.5.5 0 0 1-.5-.5m-1 4a.5.5 0 0 1 .5.5V22a.5.5 0 0 1-1 0v-2.5a.5.5 0 0 1 .5-.5"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilRaiseHandCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilRaiseHandCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
