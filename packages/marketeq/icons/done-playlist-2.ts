import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqDonePlaylist2Icon],svg[marketeq-done-playlist-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="m35.417 11.292l2.77 2.937l5.563-5.896m-14.583 31.25H43.75M29.167 31.25H43.75z"></svg:path><svg:path stroke="#306CFE" d="M20.833 36.458V6.25zm-7.291-7.291a7.292 7.292 0 1 0 0 14.583a7.292 7.292 0 0 0 0-14.583"></svg:path></svg:g>`,
})
export class MarketeqDonePlaylist2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
