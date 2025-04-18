import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilBracketsCurlyIcon],svg[uil-brackets-curly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6a2 2 0 0 1 2-2a1 1 0 0 0 0-2a4 4 0 0 0-4 4v3a2 2 0 0 1-2 2a1 1 0 0 0 0 2a2 2 0 0 1 2 2v3a4 4 0 0 0 4 4a1 1 0 0 0 0-2a2 2 0 0 1-2-2v-3a4 4 0 0 0-1.38-3A4 4 0 0 0 6 9Zm16 5a2 2 0 0 1-2-2V6a4 4 0 0 0-4-4a1 1 0 0 0 0 2a2 2 0 0 1 2 2v3a4 4 0 0 0 1.38 3A4 4 0 0 0 18 15v3a2 2 0 0 1-2 2a1 1 0 0 0 0 2a4 4 0 0 0 4-4v-3a2 2 0 0 1 2-2a1 1 0 0 0 0-2"></svg:path>`,
})
export class UilBracketsCurlyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
