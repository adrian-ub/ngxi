import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiStarFilledSpaceIcon],svg[oui-star-filled-space-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6 2a.86.86 0 0 0-.792.511l-1.33 2.924l-3.128.446c-.71.102-1.001.976-.496 1.487l2.313 2.336l-.563 3.268A.877.877 0 0 0 2.864 14a.86.86 0 0 0 .429-.116L6 12.343l2.707 1.542c.14.08.287.116.43.116a.877.877 0 0 0 .859-1.027l-.563-3.269l2.313-2.336c.505-.511.214-1.385-.496-1.487l-3.128-.446l-1.33-2.923A.86.86 0 0 0 6 2"></svg:path>`,
})
export class OuiStarFilledSpaceIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
