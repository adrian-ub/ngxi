import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqMusicAlbum2Icon],svg[marketeq-music-album-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M18.75 33.333a4.167 4.167 0 1 0 0-8.333a4.167 4.167 0 0 0 0 8.333"></svg:path><svg:path stroke="#344054" d="M22.917 29.167v-12.5a6.04 6.04 0 0 1 6.25 6.25"></svg:path><svg:path stroke="#306CFE" d="M37.5 41.667H8.333a2.083 2.083 0 0 1-2.083-2.084V10.417a2.083 2.083 0 0 1 2.083-2.084H37.5a2.083 2.083 0 0 1 2.083 2.084v29.166a2.083 2.083 0 0 1-2.083 2.084m2.083-25v16.666a10.417 10.417 0 0 0 0-16.666"></svg:path></svg:g>`,
})
export class MarketeqMusicAlbum2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
