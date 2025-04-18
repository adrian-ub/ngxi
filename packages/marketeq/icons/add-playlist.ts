import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqAddPlaylistIcon],svg[marketeq-add-playlist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M29.167 39.583H43.75M29.167 31.25H43.75zm6.25-20.833h8.333zm4.166-4.167v8.333z"></svg:path><svg:path stroke="#306CFE" d="M13.542 43.75a7.292 7.292 0 1 0 0-14.583a7.292 7.292 0 0 0 0 14.583"></svg:path><svg:path stroke="#306CFE" d="M29.167 20.833a5.96 5.96 0 0 0-2.084-8.333a48.3 48.3 0 0 1-6.25-6.25v30.208"></svg:path></svg:g>`,
})
export class MarketeqAddPlaylistIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
