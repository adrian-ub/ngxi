import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenAiozIcon],svg[token-aioz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m1.699-4.753V9.823l-5.974 6.97a.85.85 0 0 1-.551.27a.764.764 0 0 1-.799-.754v-.023c0-.174.067-.349.186-.49l7.312-8.566a.87.87 0 0 1 .653-.293a.84.84 0 0 1 .849.827v8.483a.83.83 0 0 1-.844.815a.824.824 0 0 1-.832-.815"></svg:path>`,
})
export class TokenAiozIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
