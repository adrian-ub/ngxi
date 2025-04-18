import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenTknIcon],svg[token-tkn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.031 4.719L13.97 3v4.5h5.062v3.375H13.97v5.282c0 1.656 2.9 1.845 3.937 1.296l.932 2.862c-2.285 1.36-8.807 1.035-8.807-4.13zm-3.33 6.831c-.959 0-1.732-.963-1.732-2.151s.782-2.142 1.74-2.142c.967 0 1.74.954 1.74 2.142c0 1.179-.773 2.142-1.74 2.142z"></svg:path>`,
})
export class TokenTknIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
