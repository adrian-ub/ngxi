import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsGlobeLineIcon],svg[majesticons-globe-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12 4a8 8 0 1 0 0 16a8 8 0 0 0 0-16zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12z"></svg:path><svg:path d="M11.293 2.293c-5.361 5.36-5.361 14.053 0 19.414h1.414c5.361-5.361 5.361-14.053 0-19.414h-1.414zM12 4.479c3.637 4.343 3.637 10.7 0 15.042c-3.637-4.343-3.637-10.7 0-15.042z"></svg:path><svg:path d="M3 9a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1zm0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1z"></svg:path></svg:g>`,
})
export class MajesticonsGlobeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
