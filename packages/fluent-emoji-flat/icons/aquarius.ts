import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatAquariusIcon],svg[fluent-emoji-flat-aquarius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#8D65C5" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z"></svg:path><svg:path fill="#fff" d="M25.34 14.23c.19.17.43.25.66.25c.27 0 .53-.11.71-.32c.36-.4.33-1.02-.07-1.38l-3.33-3.02a.97.97 0 0 0-1.31 0l-2.59 2.35c-.05.04-.12.04-.17 0l-2.59-2.35a.97.97 0 0 0-1.31 0l-2.59 2.35c-.05.04-.12.04-.17 0L9.99 9.76a.97.97 0 0 0-1.31 0l-3.33 3.02c-.4.36-.43.98-.07 1.38s.98.43 1.38.07l2.59-2.35c.05-.04.12-.04.17 0l2.6 2.35c.37.34.94.34 1.31 0l2.59-2.35c.05-.04.12-.04.17 0l2.59 2.35c.37.34.94.34 1.31 0l2.59-2.35c.05-.04.12-.04.17 0zm0 8.01c.19.17.43.25.66.25c.27 0 .53-.11.72-.32c.36-.4.33-1.02-.07-1.38l-3.33-3.02a.97.97 0 0 0-1.31 0l-2.59 2.35c-.05.04-.12.04-.17 0l-2.59-2.35a.97.97 0 0 0-1.31 0l-2.59 2.35c-.05.04-.12.04-.17 0L10 17.77a.97.97 0 0 0-1.31 0l-3.33 3.02c-.4.36-.43.98-.07 1.38s.98.43 1.38.07l2.59-2.35c.05-.04.12-.04.17 0l2.59 2.35c.37.34.94.34 1.31 0l2.59-2.35c.05-.04.12-.04.17 0l2.59 2.35c.37.34.94.34 1.31 0l2.59-2.35c.05-.04.12-.04.17 0z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatAquariusIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
