import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiAerialTramwayIcon],svg[twemoji-aerial-tramway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#58595B" d="M19 12V5h-2v7h-3v3h8v-3z"></svg:path><svg:path fill="#6D6E71" d="M33.213 10.977L3.27 2.954a1.001 1.001 0 0 1 .518-1.933L33.73 9.045a1 1 0 1 1-.517 1.932"></svg:path><svg:path fill="#A7A9AC" d="m23.348 4.361l-1.933-.518l.259-.965l-5.795-1.553l-.259.966l-1.932-.518a2 2 0 0 0-1.036 3.864l9.66 2.588a2 2 0 0 0 1.036-3.864"></svg:path><svg:path fill="#808285" d="M13.877 4.931a2.001 2.001 0 0 1-3.864-1.035a2.001 2.001 0 0 1 3.864 1.035m11.592 3.105a2 2 0 1 1-3.863-1.035a2 2 0 0 1 3.863 1.035"></svg:path><svg:path fill="#DD2E44" d="M6 32a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4v-5H6zm20-18H10c-1.477 0-2.752.809-3.445 2h22.89c-.693-1.191-1.968-2-3.445-2"></svg:path><svg:path fill="#88C9F9" d="M6 18h24v9H6z"></svg:path><svg:path fill="#55ACEE" d="M6.555 16A3.96 3.96 0 0 0 6 18h24c0-.732-.211-1.41-.555-2z"></svg:path><svg:path fill="#231F20" d="M12 16h2v11h-2zm9 0h2v11h-2z"></svg:path>`,
})
export class TwemojiAerialTramwayIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
