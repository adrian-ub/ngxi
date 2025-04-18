import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epPlatformIcon],svg[ep-platform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 832v-64h128v64h192v64H256v-64zM128 704V128h768v576z"></svg:path>`,
})
export class EpPlatformIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
