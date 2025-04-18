import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlinePlayStoreSolidIcon],svg[streamline-play-store-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M.352 1.305q0-.038.003-.073l5.63 5.629l-5.63 5.63l-.003-.073zM1.61 13.357q.15-.029.298-.102l6.943-3.527l-1.806-1.806zm6.496-6.496l2.152 2.152l2.586-1.314c.719-.365.719-1.31 0-1.675L10.257 4.71zm.745-2.866L1.908.468A1.1 1.1 0 0 0 1.61.366L7.045 5.8z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlinePlayStoreSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
