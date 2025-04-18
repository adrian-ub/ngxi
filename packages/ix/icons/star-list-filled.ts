import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixStarListFilledIcon],svg[ix-star-list-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M490.666 384v42.667H384V384zm-128 0v42.667H320V384zM234.702 18.56l56.85 136.682l147.56 11.83l-112.425 96.304l8.417 35.29h-36.438l.036 42.587v28.044l-64-39.09L108.37 407.37l34.348-143.994l-112.425-96.304l147.56-11.83zM490.666 320v42.667H384V320zm-128 0v42.667H320V320zm128 128v42.667H384V448zm-128 0v42.667H320V448z"></svg:path>`,
})
export class IxStarListFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
