import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixControlValueBarIcon],svg[ix-control-value-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M277.333 42.664v426.667h-192V42.664zm149.334 384v42.667H320v-42.667zm-42.667-64v42.667h-64v-42.667zm0-64v42.667h-64v-42.667zm85.333-64v42.667H320v-42.667zM234.667 85.331H128v170.666h106.667zM384 170.664v42.667h-64v-42.667zm0-64v42.667h-64v-42.667zm42.667-64v42.667H320V42.664z"></svg:path>`,
})
export class IxControlValueBarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
