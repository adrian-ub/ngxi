import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixVideoFileIcon],svg[ix-video-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.334 106.667v298.667H42.667V106.667zM128 341.334l-42.667-.001v21.334H128zm213.333-192.001H170.667v213.334h170.666zm85.334 192H384v21.334h42.667zM213.334 202.667l96 53.333l-96 53.334zm213.333 74.666H384v21.334h42.667zm-298.667 0H85.333v21.334H128zm298.667-64H384v21.334h42.667zm-298.667 0H85.333v21.334H128zm298.667-64H384v21.334h42.667zm-298.667 0H85.334l-.001 21.334H128z"></svg:path>`,
})
export class IxVideoFileIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
