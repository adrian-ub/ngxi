import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenNsfwIcon],svg[token-nsfw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19v-8.5H3zm0 0v-8.5h9zm4.75-14L12 10.5h9zm-9.5 0L12 10.5H3z"></svg:path><svg:path fill="currentColor" d="M12 10.5V7.185L16.75 5zm0 0V7.185L7.25 5z"></svg:path>`,
})
export class TokenNsfwIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
