import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiHdrIcon],svg[zmdi-hdr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 181q0 19-19 30l19 45h-32l-19-43h-24v43h-32V128h75q13 0 22.5 9.5T384 160zm-32 0v-21h-43v21zM75 171v-43h32v128H75v-53H32v53H0V128h32v43zm138-43q13 0 22.5 9.5T245 160v64q0 13-9.5 22.5T213 256h-74V128zm0 96v-64h-42v64z"></svg:path>`,
})
export class ZmdiHdrIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
