import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenFeiIcon],svg[token-fei-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.774 4.638A.9.9 0 0 0 12 4.2c-.3 0-.6.144-.774.438L9.69 7.494a.6.6 0 0 0 .516.906H13.8a.6.6 0 0 0 .516-.906l-1.536-2.85zm3.558 6.15A1.2 1.2 0 0 0 15.3 10.2H8.7a1.2 1.2 0 0 0-1.032.588l-4.5 7.2A1.2 1.2 0 0 0 4.2 19.8h15.6a1.2 1.2 0 0 0 1.032-1.812z"></svg:path>`,
})
export class TokenFeiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
