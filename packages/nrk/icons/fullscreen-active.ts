import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkFullscreenActiveIcon],svg[nrk-fullscreen-active-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m16.414 9l6.793-6.793L21.793.793L15 7.586V1h-2v10h10V9zM9 16.414V23h2V13H1v2h6.586L.793 21.793l1.414 1.414z" clip-rule="evenodd"></svg:path>`,
})
export class NrkFullscreenActiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
