import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixStarAddFilledIcon],svg[ix-star-add-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M426.666 320v64h64v42.667l-64-.001v64H384l-.001-64h-64V384h64v-64zm-192-301.36l56.85 136.682l147.56 11.83l-112.425 96.304l23.664 99.21h-51.649v6.711l-64-39.09l-126.332 77.163l34.348-143.994l-112.425-96.304l147.56-11.83z"></svg:path>`,
})
export class IxStarAddFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
