import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riMenuUnfold2LineIcon],svg[ri-menu-unfold-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.596 3.903L15.999 8.5l4.597 4.596l1.414-1.415L18.828 8.5l3.182-3.182zM21 20v-2H3v2zm-9-7v-2H3v2zm0-7V4H3v2z"></svg:path>`,
})
export class RiMenuUnfold2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
