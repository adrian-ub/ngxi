import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeSwayIcon],svg[material-icon-theme-sway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#00e676" d="M4 6v22h19a2.4 2.4 157.5 0 0 1.707-.707l2.586-2.586A2.4 2.4 112.5 0 0 28 23V4H6a2 2 135 0 0-2 2"></svg:path><svg:path fill="#263238" d="m18 8l-6.69 7.244c-.171.186-.44.506-.656.633c-.224.131-.457.157-.681.06c-.23-.1-.432-.47-.517-.708c-.602-1.696-1.04-3.489-1.415-5.268C7.814 8.88 8.543 8 9.647 8zm-8 15.436c-.8.855-1.997.755-2-.416V19c-.019-.47.53-.987 1-1h6zM16.045 16h-2.82L20 8.765c.373-.42 1.438-.76 2-.765h2l-6.486 7.33a2 2 0 0 1-1.469.67"></svg:path>`,
})
export class MaterialIconThemeSwayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
