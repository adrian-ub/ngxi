import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixSaveAllIcon],svg[ix-save-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64h224l42.667 42.667h-224V384H64zm64 384h320V219.72L356.28 128H128zm85.333-277.333h-42.666v234.666h42.666V320h149.334v85.333h42.666v-167.94l-42.666-42.667v82.607H213.333zm106.667 0h-64v64h64zm0 192v42.666h-64v-42.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxSaveAllIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
