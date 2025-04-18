import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsDriveCageIcon],svg[grommet-icons-drive-cage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M1 23V2h22v21M1 8h22zm0 6h22zm0 6h22zM4 5h12zm14 0h2zm0 6h2zm0 6h2zM4 11h12zm0 6h12z"></svg:path>`,
})
export class GrommetIconsDriveCageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
