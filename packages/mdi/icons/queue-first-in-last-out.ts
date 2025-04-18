import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiQueueFirstInLastOutIcon],svg[mdi-queue-first-in-last-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6h12v2H6zm0 4.5h12v2H6zM6 15h12v2H6zm3 4h6l-3 3zM9 2h6l-3 3z"></svg:path>`,
})
export class MdiQueueFirstInLastOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
