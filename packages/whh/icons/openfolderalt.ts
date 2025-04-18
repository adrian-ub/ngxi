import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhOpenfolderaltIcon],svg[whh-openfolderalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.232 576V64q0-27 18.5-45.5T64.232 0h384q27 0 45.5 18.5t18.5 45t18.5 45.5t45.5 19h256q27 0 45.5 18.5t18.5 45.5v64h-768zm1024-256l-192 512q0 26-18.5 45t-45.5 19h-704q-27 0-45.5-19t-18.5-45l192-512z"></svg:path>`,
})
export class WhhOpenfolderaltIcon {
  readonly viewBox = input("0 0 1025 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}
