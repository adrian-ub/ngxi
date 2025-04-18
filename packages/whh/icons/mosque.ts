import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhMosqueIcon],svg[whh-mosque-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M991.996 640q13 0 22.5 9.5t9.5 22.5v320q0 13-9.5 22.5t-22.5 9.5h-960q-13 0-22.5-9.5t-9.5-22.5V672q0-13 9.5-22.5t22.5-9.5h32V384h-32q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h32v-65q-32-3-48-16.5t-16-46.5q0-36 18-80.5t49-78t61-33.5t61 33.5t49 78t18 80.5q0 33-16 46.5t-48 16.5v65h32q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-32v256h64V512q0-88 54-157t138-91v-8q0-26 19-45t45.5-19t45 19t18.5 45v8q84 22 138 91t54 157v128h64V384h-32q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h32v-65q-32-3-48-16.5t-16-46.5q0-36 18.5-80.5t49-78t60.5-33.5t61 33.5t49 78t18 80.5q0 33-16 46.5t-48 16.5v65h32q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-32v256zm-736 160q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm128 0q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm320 0q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm128 0q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhMosqueIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
