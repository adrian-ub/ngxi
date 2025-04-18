import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamShareIcon],svg[jam-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3.414v5.642a1 1 0 1 1-2 0V3.414L4.879 4.536A1 1 0 0 1 3.464 3.12L6.293.293a.997.997 0 0 1 1.414 0l2.829 2.828A1 1 0 1 1 9.12 4.536zM3 6a1 1 0 1 1 0 2H2v4h10V8h-1a1 1 0 0 1 0-2h1a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z"></svg:path>`,
})
export class JamShareIcon {
  readonly viewBox = input("-5 -5 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
