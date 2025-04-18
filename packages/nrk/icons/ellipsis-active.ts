import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkEllipsisActiveIcon],svg[nrk-ellipsis-active-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M23 12c0-6.075-4.925-11-11-11S1 5.925 1 12s4.925 11 11 11s11-4.925 11-11M6 10a2 2 0 1 1 0 4a2 2 0 0 1 0-4m6 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4m6 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4" clip-rule="evenodd"></svg:path>`,
})
export class NrkEllipsisActiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
