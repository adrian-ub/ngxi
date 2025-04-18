import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilStretcherIcon],svg[uil-stretcher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4.5h3a1 1 0 0 0 0-2h-3a1 1 0 0 0 0 2m3 2H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1.55l5.11 2.56l-2.58 1.29A3 3 0 0 0 5 15.5a3 3 0 1 0 3 3a2 2 0 0 0 0-.36l3.94-2l4.06 2.1a2 2 0 0 0 0 .26a3 3 0 1 0 3-3a3 3 0 0 0-2.15.92l-2.72-1.36l5.11-2.56H21a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1m-16 13a1 1 0 1 1 1-1a1 1 0 0 1-1 1m14-2a1 1 0 1 1-1 1a1 1 0 0 1 1-1m-7.1-3.56L9 12.5h5.75ZM20 10.5H4v-2h16Z"></svg:path>`,
})
export class UilStretcherIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
