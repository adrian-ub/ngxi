import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFolderHistoryFillIcon],svg[ri-folder-history-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.414 3l2 2H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM13 9h-2v6h5v-2h-3z"></svg:path>`,
})
export class RiFolderHistoryFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
