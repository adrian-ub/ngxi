import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixProjectNewIcon],svg[ix-project-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256 34.347l192 110.851v132.135h-42.667v-85.331l-128 73.9v199.533L256 477.752L64 366.901V145.198zm149.333 264.32v64h64v42.667l-64-.001v64h-42.666l-.001-64h-64v-42.666h64v-64zM106.666 192.001v150.266l128 73.9V265.902zM256 83.614l-125.867 72.67L256 228.952l125.867-72.67z"></svg:path>`,
})
export class IxProjectNewIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
