import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkMediaChromecast2Icon],svg[nrk-media-chromecast-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M3 5h18v14h-8v2h10V3H1v6h2zm0 16c0-1-1-2-2-2v2zm6 0h2c0-5.55-4.45-10-10-10v2c4.45 0 8 3.55 8 8" clip-rule="evenodd"></svg:path><svg:path d="M7 21H5c0-2.45-1.55-4-4-4v-2c3.55 0 6 2.45 6 6" opacity=".5"></svg:path></svg:g>`,
})
export class NrkMediaChromecast2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
