import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cbiRoomskitchenIcon],svg[cbi-roomskitchen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.5 7a1.5 1.5 0 0 1 0 3h-15a1.5 1.5 0 0 1 0-3h5.777A2 2 0 0 1 14 6a2 2 0 0 1 4 0c0 .366-.105.705-.277 1zm2.5 5a2 2 0 0 1 0 4h-1v9.879A2.12 2.12 0 0 1 22.879 28H9.121A2.12 2.12 0 0 1 7 25.879V16H6a2 2 0 0 1 0-4z"></svg:path>`,
})
export class CbiRoomskitchenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
