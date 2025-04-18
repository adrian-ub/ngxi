import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqFileMusic2Icon],svg[marketeq-file-music-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M39.583 33.333a6.04 6.04 0 0 0-6.25-6.25v12.5"></svg:path><svg:path stroke="#344054" d="M29.167 43.75a4.167 4.167 0 1 0 0-8.333a4.167 4.167 0 0 0 0 8.333"></svg:path><svg:path stroke="#306CFE" d="M39.583 18.75V8.333A2.083 2.083 0 0 0 37.5 6.25H14.583l-4.166 4.167v31.25A2.083 2.083 0 0 0 12.5 43.75h4.167"></svg:path><svg:path stroke="#306CFE" d="M10.417 10.417h4.166V6.25z"></svg:path></svg:g>`,
})
export class MarketeqFileMusic2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
