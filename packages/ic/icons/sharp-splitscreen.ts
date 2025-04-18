import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSplitscreenIcon],svg[ic-sharp-splitscreen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4v5H6V4zm2-2H4v9h16zm-2 13v5H6v-5zm2-2H4v9h16z"></svg:path>`,
})
export class IcSharpSplitscreenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
