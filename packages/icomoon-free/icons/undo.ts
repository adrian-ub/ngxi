import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeUndoIcon],svg[icomoon-free-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1a7.98 7.98 0 0 0-5.657 2.343L0 1v6h6L3.757 4.757a6 6 0 1 1 8.211 8.743l1.323 1.5A8 8 0 0 0 8 1"></svg:path>`,
})
export class IcomoonFreeUndoIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
