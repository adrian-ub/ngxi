import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatNewMoonIcon],svg[fluent-emoji-flat-new-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#533566" d="M30 16c0 7.732-6.268 14-14 14S2 23.732 2 16S8.268 2 16 2s14 6.268 14 14"></svg:path><svg:path fill="#321B41" d="M15.5 7a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m-6 9a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7M25 11.5a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M16.5 24a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m-6.311 4.74a14.05 14.05 0 0 1-5.439-4.405a3.5 3.5 0 1 1 5.439 4.406m14.693-1.918a14.04 14.04 0 0 0 4.073-5.507a3.5 3.5 0 0 0-4.074 5.507"></svg:path></svg:g>`,
})
export class FluentEmojiFlatNewMoonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
