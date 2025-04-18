import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[topcoatRssIcon],svg[topcoat-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40.5 41.5c0-22.092-17.908-40-40-40v8c17.673 0 32 14.326 32 32zm-16 0c0-13.256-10.745-24-24-24v7.998c8.836 0 16.001 7.166 16.001 16.002zm-16 0a8 8 0 0 0-8-8v8z"></svg:path>`,
})
export class TopcoatRssIcon {
  readonly viewBox = input("0 0 42 42")
  readonly width = input("1em")
  readonly height = input("1em")
}
