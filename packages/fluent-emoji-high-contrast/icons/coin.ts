import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastCoinIcon],svg[fluent-emoji-high-contrast-coin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M11.9 19.52v-7.64h1.66v7.64zm3.31 0v-7.64h1.69v7.64zm3.35 0v-7.64h1.62v7.64z"></svg:path><svg:path d="M16 27c6.075 0 11-4.925 11-11S22.075 5 16 5S5 9.925 5 16s4.925 11 11 11m6.73-5.86c.11.35-.15.7-.5.71H9.78c-.35 0-.61-.34-.51-.68l.35-1.25c.06-.23.27-.39.51-.39h.11v-7.77c-.42-.28-.5-.97.02-1.28l5.4-3.26c.24-.15.54-.15.78 0l5.39 3.26c.52.31.44 1 .01 1.28v7.76h-.03c.23 0 .44.15.51.37z"></svg:path><svg:path d="M16 1C7.716 1 1 7.716 1 16s6.716 15 15 15s15-6.716 15-15S24.284 1 16 1M3 16C3 8.82 8.82 3 16 3s13 5.82 13 13s-5.82 13-13 13S3 23.18 3 16"></svg:path></svg:g>`,
})
export class FluentEmojiHighContrastCoinIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
