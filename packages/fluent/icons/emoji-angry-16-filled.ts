import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiAngry16FilledIcon],svg[fluent-emoji-angry-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2M5.854 5.146a.5.5 0 1 0-.708.708l.596.595a.75.75 0 1 0 1.206.275a.5.5 0 0 0-.094-.578zM10.5 7a.75.75 0 0 0-.242-.551l.596-.595a.5.5 0 0 0-.708-.708l-1 1a.5.5 0 0 0-.093.578A.75.75 0 1 0 10.5 7m-4.364 4.334A2.5 2.5 0 0 1 8 10.5c.74 0 1.405.321 1.864.834a.5.5 0 0 0 .745-.668A3.5 3.5 0 0 0 8 9.5a3.5 3.5 0 0 0-2.609 1.166a.5.5 0 0 0 .745.668"></svg:path>`,
})
export class FluentEmojiAngry16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
