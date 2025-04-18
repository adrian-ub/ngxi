import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsUsMdIcon],svg[circle-flags-us-md-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsUsMd0"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsUsMd0)"><svg:path fill="#333" d="M0 0h512v512H0Z"></svg:path><svg:path fill="#ff9811" d="M64 0v128l64 64V64Zm64 64l64 64V0h-64zm64 64v128l64 64V192Zm64 64l64 64V0h-64zm64 64v128l64 64V320Zm64 64l64 64V0h-64zm64 64v128h64v-64zm0 128l-64-64v64zM320 384l-64-64v192h64zM192 256l-64-64v320h64zM64 128L0 64v448h64z"></svg:path><svg:path fill="#eee" d="M256 0v256h256V0zm0 256H0v256h256z"></svg:path><svg:path fill="#a2001d" d="M384 0v32h32v64h64v32h32V0zm96 128h-96v96h32v-64h64zm-96 96h-32v-64h-64v-32h-32v128h128zm-128 32H128v32h32v64h64v32h32zm-32 128h-96v96h32v-64h64zm-96 96H96v-64H32v-32H0v128h128zm-96-96h96v-96H96v64H32zm256-256h96V32h-32v64h-64z"></svg:path></svg:g>`,
})
export class CircleFlagsUsMdIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
