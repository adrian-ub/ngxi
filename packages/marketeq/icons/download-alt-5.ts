import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqDownloadAlt5Icon],svg[marketeq-download-alt-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 6.25v16.667m-6.25-6.25l6.25 6.25l6.25-6.25"></svg:path><svg:path stroke="#306CFE" d="M43.75 27.083L37.98 9.75A2.08 2.08 0 0 0 36 8.333h-2.667m-16.666 0H14a2.08 2.08 0 0 0-2.083 1.417L6.25 27.083m37.5 0v14.584a2.083 2.083 0 0 1-2.083 2.083H8.333a2.083 2.083 0 0 1-2.083-2.083V27.083h10.417a8.333 8.333 0 1 0 16.666 0z"></svg:path></svg:g>`,
})
export class MarketeqDownloadAlt5Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
