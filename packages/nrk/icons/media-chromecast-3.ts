import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkMediaChromecast3Icon],svg[nrk-media-chromecast-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M3 5h18v14h-8v2h10V3H1v6h2zm0 16c0-1-1-2-2-2v2zm2 0h2c0-3.55-2.45-6-6-6v2c2.45 0 4 1.55 4 4" clip-rule="evenodd"></svg:path><svg:path d="M11 21H9c0-4.45-3.55-8-8-8v-2c5.55 0 10 4.45 10 10" opacity=".5"></svg:path></svg:g>`,
})
export class NrkMediaChromecast3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
