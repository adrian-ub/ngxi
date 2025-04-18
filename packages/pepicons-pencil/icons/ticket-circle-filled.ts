import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPencilTicketCircleFilledIcon],svg[pepicons-pencil-ticket-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPencilTicketCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M4.5 9A1.5 1.5 0 0 1 6 7.5h14A1.5 1.5 0 0 1 21.5 9v2.64c0 .269-.161.51-.408.613a.809.809 0 0 0 0 1.493a.66.66 0 0 1 .408.613V17a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 17v-2.64c0-.269.161-.51.408-.614a.809.809 0 0 0 0-1.493a.66.66 0 0 1-.408-.612zM6 8.5a.5.5 0 0 0-.5.5v2.431c1.208.683 1.208 2.455 0 3.138V17a.5.5 0 0 0 .5.5h14a.5.5 0 0 0 .5-.5v-2.431c-1.208-.683-1.208-2.455 0-3.138V9a.5.5 0 0 0-.5-.5z"></svg:path><svg:path d="M15.5 16.25a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0V17a.75.75 0 0 1 .75-.75m0-8.5a.75.75 0 0 1 .75.75V9a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75m0 2.75a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75m0 3a.75.75 0 0 1 .75.75v.5a.75.75 0 0 1-1.5 0v-.5a.75.75 0 0 1 .75-.75"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPencilTicketCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPencilTicketCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
