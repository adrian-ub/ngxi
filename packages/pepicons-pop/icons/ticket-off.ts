import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopTicketOffIcon],svg[pepicons-pop-ticket-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M1 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2.64c0 .47-.282.894-.716 1.075a.309.309 0 0 0 0 .57c.434.18.716.604.716 1.074V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-2.64c0-.47.282-.894.716-1.075a.309.309 0 0 0 0-.57A1.16 1.16 0 0 1 1 8.641zm16 0H3v2.161c1.208.904 1.208 2.774 0 3.678V14h14v-2.161c-1.208-.905-1.208-2.774 0-3.678z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M12.5 13a1 1 0 0 1 1 1v.5a1 1 0 1 1-2 0V14a1 1 0 0 1 1-1m0-8.5a1 1 0 0 1 1 1V6a1 1 0 1 1-2 0v-.5a1 1 0 0 1 1-1m0 2.75a1 1 0 0 1 1 1v.5a1 1 0 1 1-2 0v-.5a1 1 0 0 1 1-1m0 3a1 1 0 0 1 1 1v.5a1 1 0 1 1-2 0v-.5a1 1 0 0 1 1-1" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopTicketOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
