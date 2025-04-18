import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastChairIcon],svg[fluent-emoji-high-contrast-chair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v1a4 4 0 0 1-3 3.874V13c.793 0 1.502.344 2.073.777c.577.438 1.085 1.018 1.502 1.626c.809 1.18 1.425 2.69 1.425 3.847a2.75 2.75 0 0 1-2.099 2.672l1.308 6.458c.292 1.48-1.049 2.464-1.805 0L21.28 22h-.312l-.09 3.982c-.043 1.533-1.293 1.334-1.35 0L19.13 22h-6.26l-.398 3.982c-.058 1.334-1.307 1.533-1.35 0L11.032 22h-.313l-2.124 6.38c-.756 2.464-2.097 1.48-1.805 0l1.308-6.458A2.75 2.75 0 0 1 6 19.25c0-1.156.616-2.667 1.425-3.847c.417-.608.925-1.188 1.502-1.626C9.498 13.344 10.207 13 11 13V9.874A4 4 0 0 1 8 6zm3 10c-.207 0-.498.093-.864.371c-.361.274-.728.678-1.061 1.163C8.384 17.542 8 18.656 8 19.25c0 .414.336.75.75.75h14.5a.75.75 0 0 0 .75-.75c0-.594-.384-1.708-1.075-2.716c-.333-.485-.7-.89-1.06-1.163c-.367-.278-.658-.371-.865-.371zm8-2v-3h-6v3zm3-7V5a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2"></svg:path>`,
})
export class FluentEmojiHighContrastChairIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
