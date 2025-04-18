import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatToiletIcon],svg[fluent-emoji-flat-toilet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#B4ACBC" d="M3.5 14A1.5 1.5 0 0 0 2 15.5v1a.5.5 0 0 0 .5.5h1L9 24l-2 4s-1 2 1 2h14c1 0 2-1 2-2v-8c0-1.5 2-3 2-3h-2.5a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5z"></svg:path><svg:path fill="#CDC4D6" d="M21 2a1 1 0 0 0-1 1v12c0 .768.289 1.47.764 2H3.2c.927 4.564 4.962 8 9.8 8c4.49 0 8.289-2.959 9.553-7.033Q22.772 18 23 18h2a3 3 0 0 0 3-3V3a1 1 0 0 0-1-1z"></svg:path></svg:g>`,
})
export class FluentEmojiFlatToiletIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
