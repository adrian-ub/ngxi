import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineKeyboardSolidIcon],svg[streamline-keyboard-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.5.055a.75.75 0 0 1 .75.75a2.57 2.57 0 0 1-.822 1.874a2.82 2.82 0 0 1-1.928.754h-4c-.346 0-.67.13-.9.347c-.23.215-.35.498-.35.781V5h8.25A1.5 1.5 0 0 1 14 6.5v6a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 12.5v-6A1.5 1.5 0 0 1 1.5 5h1.25v-.439c0-.713.302-1.386.822-1.875A2.82 2.82 0 0 1 5.5 1.933h4c.346 0 .67-.13.9-.347s.35-.498.35-.781a.75.75 0 0 1 .75-.75M4.866 10.844a.5.5 0 0 1 .5-.5h3.268a.5.5 0 1 1 0 1H5.366a.5.5 0 0 1-.5-.5m-2.768-.5a.5.5 0 1 0 0 1h1.09a.5.5 0 0 0 0-1zm8.715 0a.5.5 0 1 0 0 1h1.09a.5.5 0 0 0 0-1zM1.598 8.156a.5.5 0 0 1 .5-.5h1.09a.5.5 0 0 1 0 1h-1.09a.5.5 0 0 1-.5-.5m3.405-.5a.5.5 0 0 0 0 1h1.09a.5.5 0 0 0 0-1zm2.405.5a.5.5 0 0 1 .5-.5h1.09a.5.5 0 0 1 0 1h-1.09a.5.5 0 0 1-.5-.5m3.405-.5a.5.5 0 1 0 0 1h1.09a.5.5 0 0 0 0-1z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineKeyboardSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
