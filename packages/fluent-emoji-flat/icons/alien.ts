import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatAlienIcon],svg[fluent-emoji-flat-alien-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#86D72F" d="M29.84 15.92C29.84 23.61 18.92 30 15.92 30S2 23.61 2 15.92S8.23 2 15.92 2s13.92 6.23 13.92 13.92"></svg:path><svg:path fill="#212121" d="M13.368 24.225a1 1 0 0 1 1.407.143c.376.461.825.645 1.225.645s.85-.184 1.225-.645a1 1 0 1 1 1.55 1.264c-.724.889-1.726 1.38-2.775 1.38c-1.05 0-2.05-.491-2.775-1.38a1 1 0 0 1 .143-1.407"></svg:path><svg:path fill="#533566" d="M6.474 19.527c2.254 2.253 4.6 3.549 6.845 1.306c2.253-2.242 2.233-5.905-.01-8.147c-2.244-2.243-5.898-2.253-8.142 0s-.946 4.588 1.307 6.84m19.051.001c-2.255 2.253-4.602 3.549-6.847 1.306s-2.234-5.905.01-8.147c2.245-2.243 5.9-2.253 8.144 0c2.245 2.253.947 4.588-1.307 6.84"></svg:path><svg:path fill="#fff" d="M12.62 15.62c.61-.61.47-1.73-.31-2.51c-.78-.77-1.9-.92-2.51-.31s-.47 1.73.31 2.51s1.9.92 2.51.31m13.28 0c.61-.61.47-1.73-.31-2.51c-.77-.77-1.9-.92-2.51-.31s-.47 1.73.31 2.51s1.9.92 2.51.31"></svg:path></svg:g>`,
})
export class FluentEmojiFlatAlienIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
