import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiRoomsstorageIcon],svg[cbi-roomsstorage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 26V11h22v15a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1m7-11a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zM26 5a1 1 0 0 1 1 1v3H5V6a1 1 0 0 1 1-1z"></svg:path>`,
})
export class CbiRoomsstorageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
