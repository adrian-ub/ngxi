import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsCallEndIcon],svg[proicons-call-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="M12 8.25c2.517 0 5 .555 7.3 1.621c1.252.581 1.95 1.895 1.95 3.276V14a1.75 1.75 0 0 1-1.75 1.75h-2A1.75 1.75 0 0 1 15.75 14v-.492a1.5 1.5 0 0 0-1.5-1.5h-4.5a1.5 1.5 0 0 0-1.5 1.5V14a1.75 1.75 0 0 1-1.75 1.75h-2A1.75 1.75 0 0 1 2.75 14v-.853c0-1.38.698-2.695 1.95-3.276A17.3 17.3 0 0 1 12 8.25Z"></svg:path>`,
})
export class ProiconsCallEndIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
