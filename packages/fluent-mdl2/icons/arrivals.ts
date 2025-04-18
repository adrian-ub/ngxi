import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ArrivalsIcon],svg[fluent-mdl2-arrivals-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1920 1216q0 40-15 75t-41 61t-61 41t-75 15H128L0 896h384l32 128h256L512 384h320l320 640h576q40 0 75 15t61 41t41 61t15 75m-1692 64h1500q26 0 45-19t19-45t-19-45t-45-19h-655q-78-162-158-320T753 512h-77q40 161 79 320t81 320H316l-16-64l-16-64H164zm1820 384v128H640v-128z"></svg:path>`,
})
export class FluentMdl2ArrivalsIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
