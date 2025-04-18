import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixFaceplateContainerIcon],svg[ix-faceplate-container-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64h384v384H64zm42.667 42.667v298.666h298.666V106.667zm42.666 42.666h85.334v85.334h-85.334zm213.334 0h-64v85.334h64zM149.333 298.667h85.334v64h-85.334zm150-21.334c-12.15 0-22 9.85-22 22v41.334c0 12.15 9.85 22 22 22h41.334c12.15 0 22-9.85 22-22v-41.334c0-12.15-9.85-22-22-22z" clip-rule="evenodd"></svg:path>`,
})
export class IxFaceplateContainerIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
