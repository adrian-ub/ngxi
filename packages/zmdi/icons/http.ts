import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiHttpIcon],svg[zmdi-http-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M75 171v-43h32v128H75v-53H32v53H0V128h32v43zm53-11v-32h96v32h-32v96h-32v-96zm117 0v-32h96v32h-32v96h-32v-96zm192-32q13 0 22.5 9.5T469 160v21q0 13-9.5 22.5T437 213h-42v43h-32V128zm0 53v-21h-42v21z"></svg:path>`,
})
export class ZmdiHttpIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}
