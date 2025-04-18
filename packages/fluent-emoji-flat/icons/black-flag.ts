import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatBlackFlagIcon],svg[fluent-emoji-flat-black-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#9B9B9B" fill-rule="evenodd" d="M7.226 1.95a.95.95 0 0 1 .95.95v25.812a.95.95 0 1 1-1.9 0V2.9a.95.95 0 0 1 .95-.95" clip-rule="evenodd"></svg:path><svg:path fill="#000" d="M9.451 5.119a7.9 7.9 0 0 0-2.593-.5c-.344-.002-.582.288-.582.631v12.198a.52.52 0 0 0 .515.512c2.315.049 2.846.909 5.493.909c2.833 0 6.008-1.907 8.748-1.907c1.857 0 3.875.685 5.016 1.198c.241.108.525-.064.525-.329V5.494a.74.74 0 0 0-.425-.67c-5.097-2.338-7.6-.774-10.72.107c-1.992.563-3.766.828-5.977.188"></svg:path></svg:g>`,
})
export class FluentEmojiFlatBlackFlagIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
