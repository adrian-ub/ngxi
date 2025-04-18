import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhLanIcon],svg[whh-lan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.417 768h-64v64q0 27-19 45.5t-45 18.5h-64v64q0 27-18.5 45.5t-45.5 18.5h-320q-26 0-45-18.5t-19-45.5v-64h-64q-27 0-45.5-18.5t-18.5-45.5v-64h-64q-26 0-45-18.5t-19-45.5V64q0-26 19-45t45-19h832q27 0 45.5 19t18.5 45v640q0 27-18.5 45.5t-45.5 18.5m0-608q0-13-9.5-22.5t-22.5-9.5h-96v96q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5v-96h-64v96q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5v-96h-64v96q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5v-96h-64v96q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5v-96h-64v96q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5v-96h-96q-13 0-22.5 9.5t-9.5 22.5v448q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h256q13 0 22.5-9.5t9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5-9.5t9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhLanIcon {
  readonly viewBox = input("0 0 961 1024")
  readonly width = input("0.94em")
  readonly height = input("1em")
}
