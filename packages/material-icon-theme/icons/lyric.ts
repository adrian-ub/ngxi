import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeLyricIcon],svg[material-icon-theme-lyric-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#50c5ef" d="M26 7.7c0-.1-.1-.2-.2-.3l-5.2-5.2c-.1-.1-.3-.2-.4-.2h-.1q-.15 0 0 0H7.7c-1 .1-1.7.8-1.7 1.8v24.5c0 1 .8 1.7 1.7 1.7h16.6c1 0 1.7-.8 1.7-1.7zq0 .15 0 0M22 12h-4v8c0 2.2-1.8 4-4 4s-4-1.8-4-4s1.8-4 4-4c.7 0 1.4.2 2 .6V8h6z"></svg:path>`,
})
export class MaterialIconThemeLyricIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
