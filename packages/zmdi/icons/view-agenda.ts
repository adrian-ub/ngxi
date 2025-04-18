import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiViewAgendaIcon],svg[zmdi-view-agenda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 213q9 0 15 6.5t6 15.5v128q0 8-6 14.5t-15 6.5H21q-8 0-14.5-6.5T0 363V235q0-9 6.5-15.5T21 213zm0-213q9 0 15 6.5t6 14.5v128q0 9-6 15.5t-15 6.5H21q-8 0-14.5-6.5T0 149V21q0-8 6.5-14.5T21 0z"></svg:path>`,
})
export class ZmdiViewAgendaIcon {
  readonly viewBox = input("0 0 408 384")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
