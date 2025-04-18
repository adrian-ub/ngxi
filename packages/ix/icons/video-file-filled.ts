import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixVideoFileFilledIcon],svg[ix-video-file-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 106.667v298.667H42.667V106.667zM128 341.334H85.334v21.333H128zm298.667 0H384v21.333h42.667zM213.334 202.667v106.667l96-53.334zM128 277.334H85.334v21.333H128zm298.667 0H384v21.333h42.667zm-298.667-64H85.334v21.333H128zm298.667 0H384v21.333h42.667zm-298.667-64H85.334v21.333H128zm298.667 0H384v21.333h42.667z"></svg:path>`,
})
export class IxVideoFileFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
