import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTransitSkipIcon],svg[mdi-transit-skip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12c0-4-2.5-7.3-6-8.5c-.3-1.4-1.5-2.5-3-2.5c-1.7 0-3 1.3-3 3s1.3 3 3 3c1.1 0 2.1-.6 2.6-1.5C17.2 6.5 19 9 19 12c0 2.9-1.8 5.5-4.4 6.5c-.5-.9-1.5-1.5-2.6-1.5c-1.7 0-3 1.3-3 3s1.3 3 3 3c1.5 0 2.7-1.1 3-2.5c3.5-1.2 6-4.6 6-8.5m-9-7c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m0 16c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m0-12c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3"></svg:path>`,
})
export class MdiTransitSkipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
