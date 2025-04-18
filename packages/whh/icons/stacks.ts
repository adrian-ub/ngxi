import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhStacksIcon],svg[whh-stacks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.488 1024h-512q-27 0-45.5-18.5t-18.5-45.5v-64h-64q-27 0-45.5-19t-18.5-45v-64h-64q-27 0-45.5-19t-18.5-45v-64h-64q-27 0-45.5-19t-18.5-45V64q0-27 18.5-45.5T64.488 0h512q27 0 45.5 18.5t18.5 45.5v64h64q27 0 45.5 18.5t18.5 45.5v64h64q26 0 45 18.5t19 45.5v64h64q27 0 45.5 18.5t18.5 45.5v512q0 26-18.5 45t-45.5 19m-384-960h-512v512h64V192q0-27 18.5-45.5t45.5-18.5h384zm128 128h-512v512h64V320q0-27 18.5-45.5t45.5-18.5h384zm128 128h-512v512h64V448q0-27 18.5-45.5t45.5-18.5h384zm128 128h-512v512h512z"></svg:path>`,
})
export class WhhStacksIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
