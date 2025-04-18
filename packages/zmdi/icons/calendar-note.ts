import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCalendarNoteIcon],svg[zmdi-calendar-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 197v43H85v-43zm42-149q18 0 30.5 12.5T384 91v298q0 18-12.5 30.5T341 432H43q-18 0-30.5-12.5T0 389V91q0-18 12.5-30.5T43 48h21V5h43v43h170V5h43v43zm0 341V155H43v234zM235 283v42H85v-42z"></svg:path>`,
})
export class ZmdiCalendarNoteIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}
