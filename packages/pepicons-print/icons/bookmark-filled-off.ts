import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintBookmarkFilledOffIcon],svg[pepicons-print-bookmark-filled-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m12 14.676l-4.645 4.676A.5.5 0 0 1 6.5 19V5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.855.352z" opacity=".2"></svg:path><svg:path fill-rule="evenodd" d="M5.355 17.352L10 12.676l4.645 4.676A.5.5 0 0 0 15.5 17V3a.5.5 0 0 0-.5-.5H5a.5.5 0 0 0-.5.5v14a.5.5 0 0 0 .855.352m.145-1.565V3.5h9v12.287l-4.145-4.172a.5.5 0 0 0-.71 0z" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPrintBookmarkFilledOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
