import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopTicketCircleFilledIcon],svg[pepicons-pop-ticket-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopTicketCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M4 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2.64c0 .47-.282.894-.716 1.075a.309.309 0 0 0 0 .57c.434.18.716.604.716 1.074V17a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2.64c0-.47.282-.894.716-1.075a.309.309 0 0 0 0-.57A1.16 1.16 0 0 1 4 11.641zm16 0H6v2.161c1.208.904 1.208 2.774 0 3.678V17h14v-2.161c-1.208-.905-1.208-2.774 0-3.678z"></svg:path><svg:path d="M15.5 16a1 1 0 0 1 1 1v.5a1 1 0 1 1-2 0V17a1 1 0 0 1 1-1m0-8.5a1 1 0 0 1 1 1V9a1 1 0 1 1-2 0v-.5a1 1 0 0 1 1-1m0 2.75a1 1 0 0 1 1 1v.5a1 1 0 1 1-2 0v-.5a1 1 0 0 1 1-1m0 3a1 1 0 0 1 1 1v.5a1 1 0 1 1-2 0v-.5a1 1 0 0 1 1-1"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopTicketCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopTicketCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
