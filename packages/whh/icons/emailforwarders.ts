import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhEmailforwardersIcon],svg[whh-emailforwarders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1017.64 733l-350-349l350-350q7 15 7 30v640q0 15-7 29M63.64 0h898l-449 449zm-56 733q-7-14-7-29V64q0-15 7-30l350 350zm466-233q6 6 15.5 9t16.5 3h7q26 1 39-12l71-71l339 339h-1v2l.5 4l-.5 6l-2.5 7.5l-4.5 8.5l-8 10l-243 208q-8 7-28.5 8.5t-42-3.5t-38.5-18.5t-17-32.5v-72h-192q-26 0-45-19t-19-45v-64h-257l339-339zm-25 332h192v81q26 25 43 8l149-129q10-10 10-24t-10-24l-149-129q-17-17-43 8v81h-192q-27 0-45.5 18.5t-18.5 45t19 45.5t45 19"></svg:path>`,
})
export class WhhEmailforwardersIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
