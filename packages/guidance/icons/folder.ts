import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceFolderIcon],svg[guidance-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M1.5 10V2.5h5l3 3h11v3m3 .25V8.5H4.6l-.15.25l-.234.492A28 28 0 0 0 1.5 21.272v.228h19v-.128a28 28 0 0 1 2.757-12.116z"></svg:path>`,
})
export class GuidanceFolderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
