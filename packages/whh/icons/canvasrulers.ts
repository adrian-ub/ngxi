import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCanvasrulersIcon],svg[whh-canvasrulers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.06 1024h-640q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h608V352q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5v640q0 13-9.5 22.5t-22.5 9.5m-32-800q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v32h-64v-96q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v96h-64v-32q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v32h-64v-96q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v96h-64v-32q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v32h-64v-96q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v96h-96q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h96v64h-32q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h32v64h-96q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h96v64h-32q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h32v64h-96q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h96v64h-32q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h32v64h-192q-26 0-45-18.5T.06 960V64q0-26 19-45t45-19h896q26 0 45 19t19 45v192h-64z"></svg:path>`,
})
export class WhhCanvasrulersIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
