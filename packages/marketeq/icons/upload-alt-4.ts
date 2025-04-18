import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqUploadAlt4Icon],svg[marketeq-upload-alt-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 22.917V6.25m6.25 6.25L25 6.25l-6.25 6.25"></svg:path><svg:path stroke="#306CFE" d="M43.75 27.083L37.5 8.333M6.25 27.083l6.25-18.75m31.25 18.75v14.584a2.083 2.083 0 0 1-2.083 2.083H8.333a2.083 2.083 0 0 1-2.083-2.083V27.083h10.417a8.333 8.333 0 1 0 16.666 0z"></svg:path></svg:g>`,
})
export class MarketeqUploadAlt4Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
