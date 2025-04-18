import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineEmojisFranceIcon],svg[streamline-emojis-france-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#ff6242" stroke="#45413c" stroke-linecap="round" stroke-linejoin="round" d="M45 12.25h-6.32A45.9 45.9 0 0 1 24 9.88A45.7 45.7 0 0 0 9.37 7.5H3c-.58 0-1 .35-1 .79v26a.94.94 0 0 0 1 .79h6.37A46 46 0 0 1 24 37.46a45.6 45.6 0 0 0 14.65 2.38H45a.93.93 0 0 0 1-.79V13a.94.94 0 0 0-1-.75"></svg:path><svg:path fill="#fff" stroke="#45413c" d="M24 9.88A43.6 43.6 0 0 0 16.28 8v27.61A44.4 44.4 0 0 1 24 37.46a43.3 43.3 0 0 0 7.74 1.86V11.73A44 44 0 0 1 24 9.88Z"></svg:path><svg:path fill="#009fd9" stroke="#45413c" d="M9.37 7.5H3c-.58 0-1 .35-1 .79v26a.94.94 0 0 0 1 .79h6.37a47 47 0 0 1 6.91.52V8a47 47 0 0 0-6.91-.5Z"></svg:path><svg:path fill="#45413c" d="M12.5 45.5a11.5 1.5 0 1 0 23 0a11.5 1.5 0 1 0-23 0" opacity=".15"></svg:path>`,
})
export class StreamlineEmojisFranceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
