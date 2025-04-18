import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignDataErrorIcon],svg[tdesign-data-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v12h-2v-1H4v7h10v2H2zm2 9h16V4H4zm1.998-4.5h2.004v2.004H5.998zm10.88 8.964L19 17.586l2.122-2.122l1.414 1.415L20.414 19l2.122 2.121l-1.415 1.415l-2.12-2.122l-2.122 2.121l-1.414-1.414L17.586 19l-2.121-2.121zm-10.88.036h2.004v2.004H5.998z"></svg:path>`,
})
export class TdesignDataErrorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
