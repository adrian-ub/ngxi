import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqBlackBoardIcon],svg[marketeq-black-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M25 35.417v6.25m12.5 2.083l-1.396-8.333l-.354-2.084zM31.583 8.333L31.25 6.25zm-17.333 25l-.354 2.084L12.5 43.75zm4.5-27.083l-.354 2.083z"></svg:path><svg:path stroke="#306CFE" d="M41.667 8.333H8.333c-1.15 0-2.083.933-2.083 2.084V31.25c0 1.15.933 2.083 2.083 2.083h33.334c1.15 0 2.083-.932 2.083-2.083V10.417c0-1.15-.933-2.084-2.083-2.084"></svg:path></svg:g>`,
})
export class MarketeqBlackBoardIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
