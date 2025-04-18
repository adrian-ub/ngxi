import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDataCheckedIcon],svg[tdesign-data-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v12h-2v-1H4v7h8.5v2H2zm2 9h16V4H4zm1.998-4.5h2.004v2.004H5.998zm0 9h2.004v2.004H5.998zm17.598 1.44l-5.657 5.656l-3.535-3.535l1.414-1.415l2.121 2.122l4.243-4.243z"></svg:path>`,
})
export class TdesignDataCheckedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
