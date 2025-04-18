import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenDfxIcon],svg[token-dfx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3.006v9.033l-3.538-3.6c-1.142.979-1.49 2.83-1.541 3.6c0 3.066 3.06 5.203 5.079 4.984V21c-7.099-.338-8.96-6.115-9-8.96c0-6.323 5.45-9.18 9-9.034m0 17.989V11.96l3.538 3.6c1.142-.979 1.49-2.83 1.541-3.6c0-3.066-3.06-5.203-5.079-4.984V3c7.099.338 8.96 6.115 9 8.96c0 6.323-5.45 9.18-9 9.034"></svg:path>`,
})
export class TokenDfxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
