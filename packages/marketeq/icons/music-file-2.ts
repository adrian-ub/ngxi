import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqMusicFile2Icon],svg[marketeq-music-file-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M31.25 43.75a4.167 4.167 0 1 0 0-8.333a4.167 4.167 0 0 0 0 8.333"></svg:path><svg:path stroke="#344054" d="M41.667 33.333a6.04 6.04 0 0 0-6.25-6.25v12.5"></svg:path><svg:path stroke="#306CFE" d="M18.75 39.583h-8.333A2.083 2.083 0 0 1 8.333 37.5V18.75l12.5-12.5h12.5a2.083 2.083 0 0 1 2.084 2.083V18.75"></svg:path><svg:path stroke="#306CFE" d="M20.833 18.75V6.25l-12.5 12.5z"></svg:path></svg:g>`,
})
export class MarketeqMusicFile2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
