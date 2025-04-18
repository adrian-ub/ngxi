import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiRainbowIcon],svg[twemoji-rainbow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#8767AC" d="M36 1C16.118 1 1 16.118 1 36h17.042c0-9.917 8.042-17.958 17.958-17.958z"></svg:path><svg:path fill="#EB2027" d="M0 35.999h3.042c0-18.189 14.734-32.935 32.917-32.957V0C16.095.023 0 16.131 0 35.999"></svg:path><svg:path fill="#F19020" d="M3.083 36h3C6.083 19.468 19.473 6.065 36 6.043v-3C17.817 3.065 3.083 17.811 3.083 36"></svg:path><svg:path fill="#FFCB4C" d="M6.083 36h3C9.083 21.125 21.13 9.065 36 9.043v-3C19.473 6.065 6.083 19.468 6.083 36"></svg:path><svg:path fill="#5C903F" d="M9.083 36h3c0-13.217 10.705-23.935 23.917-23.957v-3C21.13 9.065 9.083 21.125 9.083 36"></svg:path><svg:path fill="#226798" d="M12.083 36h3c0-11.56 9.362-20.934 20.917-20.956v-3.001C22.788 12.065 12.083 22.783 12.083 36"></svg:path>`,
})
export class TwemojiRainbowIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
