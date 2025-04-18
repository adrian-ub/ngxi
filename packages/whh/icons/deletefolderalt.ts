import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhDeletefolderaltIcon],svg[whh-deletefolderalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.232 896h-896q-27 0-45.5-19t-18.5-45V256h1024v576q0 26-19 45t-45 19m-64-352q0-13-9.5-22.5t-22.5-9.5h-320q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h320q13 0 22.5-9.5t9.5-22.5zM.232 64q0-27 18.5-45.5T64.232 0h384q27 0 45.5 18.5t18.5 45.5t18.5 45.5t45.5 18.5h384q27 0 45.5 19t18.5 45H.232z"></svg:path>`,
})
export class WhhDeletefolderaltIcon {
  readonly viewBox = input("0 0 1025 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}
