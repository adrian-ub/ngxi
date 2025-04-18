import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatHighHeeledShoeIcon],svg[fluent-emoji-flat-high-heeled-shoe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#CA0B4A" d="M6 16.41c2.65 0 4 1.42 4 3.57v5.68c0 1.52 1.23 2.75 2.75 2.75l15.62.05c1.01 0 1.14-1.17.42-2.11c0 0-.86-1.24-4.56-4.94c-2.2-2.18-10.76-12.53-13.86-16.28c-.83-1-2.21-1.41-3.42-.93A6.26 6.26 0 0 0 3 10.01v6.62l2.08-.19z"></svg:path><svg:path fill="#533566" d="M5.01 16.41H3v12h2.01z"></svg:path><svg:path fill="#1C1C1C" d="M23.56 20.68C21.41 18.52 12.64 7.9 10.24 4.99c-.22-.28-.52-.47-.85-.58c-.5.55-.53 1.39-.04 1.97l12.4 14.61c.3.35.72.53 1.14.53c.34 0 .69-.12.97-.36c.04-.03.04 0 .07-.03c-.12-.12-.23-.31-.37-.45"></svg:path></svg:g>`,
})
export class FluentEmojiFlatHighHeeledShoeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
