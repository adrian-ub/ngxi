import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqKaraokeIcon],svg[marketeq-karaoke-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M29.167 39.583H43.75M29.167 31.25H43.75zm4.166-8.333H43.75z"></svg:path><svg:path stroke="#306CFE" d="M22.917 20.833H6.25m13.833 0l-1.208 20.959a2.083 2.083 0 0 1-2.083 1.958h-4.417a2.083 2.083 0 0 1-2.083-1.958L9.083 20.833zm-5.5-14.583a8.333 8.333 0 0 0-5.458 14.583h10.917A8.333 8.333 0 0 0 14.583 6.25"></svg:path></svg:g>`,
})
export class MarketeqKaraokeIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
