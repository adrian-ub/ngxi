import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTwoFingerDragHotizontalIcon],svg[streamline-two-finger-drag-hotizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.95 7.574L5.993 3.29a1.196 1.196 0 0 1 .757-1.384v0a1.196 1.196 0 0 1 1.577.863l.888 3.976l.267-.097a2.144 2.144 0 0 1 2.75 1.278l.926 2.537M6.95 7.581l-1.57-2.74a1.22 1.22 0 0 0-1.474-.538v0a1.218 1.218 0 0 0-.662 1.706L5.13 9.633l-.36.215a1.715 1.715 0 0 0-.118 2.873l.242.171l.565.403M1.75.5L.5 1.75L1.75 3M.5 1.75h3M12.25.5l1.25 1.25L12.25 3m1.25-1.25h-3"></svg:path>`,
})
export class StreamlineTwoFingerDragHotizontalIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
