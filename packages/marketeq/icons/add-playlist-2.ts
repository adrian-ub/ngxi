import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqAddPlaylist2Icon],svg[marketeq-add-playlist-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M29.167 39.583H43.75M29.167 31.25H43.75zm6.25-20.833h8.333zm4.166-4.167v8.333z"></svg:path><svg:path stroke="#306CFE" d="M20.833 36.458V6.25zm-7.291-7.291a7.292 7.292 0 1 0 0 14.583a7.292 7.292 0 0 0 0-14.583"></svg:path></svg:g>`,
})
export class MarketeqAddPlaylist2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
