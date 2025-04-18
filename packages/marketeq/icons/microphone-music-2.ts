import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqMicrophoneMusic2Icon],svg[marketeq-microphone-music-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M29.167 25a4.167 4.167 0 1 0 0-8.333a4.167 4.167 0 0 0 0 8.333"></svg:path><svg:path stroke="#344054" d="M39.583 14.583a6.04 6.04 0 0 0-6.25-6.25v12.5"></svg:path><svg:path stroke="#306CFE" d="M26.354 33.333a8.33 8.33 0 0 1-7.291 1.896a9.02 9.02 0 0 1-6.563-8.458V14.938a8.604 8.604 0 0 1 6.604-8.521A8.33 8.33 0 0 1 25 7.375m4.167 36.375H12.5m8.333-8.333v8.333z"></svg:path></svg:g>`,
})
export class MarketeqMicrophoneMusic2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
