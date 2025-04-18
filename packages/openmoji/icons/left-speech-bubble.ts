import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiLeftSpeechBubbleIcon],svg[openmoji-left-speech-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#FFF" d="M54.88 49.128A22.9 22.9 0 0 0 59 36c0-12.703-10.297-23-23-23S13 23.297 13 36s10.297 23 23 23c3.758 0 7.302-.907 10.435-2.505l4.814 2.052l5.728 2.443l-1.084-6.132z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" d="M54.88 49.128A22.9 22.9 0 0 0 59 36c0-12.703-10.297-23-23-23S13 23.297 13 36s10.297 23 23 23c3.758 0 7.302-.907 10.435-2.505l4.814 2.052l5.728 2.443l-1.084-6.132z"></svg:path>`,
})
export class OpenmojiLeftSpeechBubbleIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
