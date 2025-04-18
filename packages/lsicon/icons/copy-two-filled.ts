import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconCopyTwoFilledIcon],svg[lsicon-copy-two-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14 2H5v2h1V3h7v7h-1v1h2zm-3 3H2v9h9zM6 7v2H4v1h2v2h1v-2h2V9H7V7z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconCopyTwoFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
