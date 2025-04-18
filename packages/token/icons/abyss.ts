import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenAbyssIcon],svg[token-abyss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.01 8.685c-1.35 0-2.38.208-2.38.208v2.16h4.738V8.894c.022 0-1.007-.21-2.358-.21"></svg:path><svg:path fill="currentColor" d="M12 3C8.54 3 4.42 4.778 4.42 4.778V15.6L12 21l7.579-5.378V4.755C19.6 4.755 15.48 3 11.999 3m4.263 11.436l-1.895 1.383v-2.872H9.631v2.871l-1.894-1.382V7.26s2.5-.57 4.285-.57c1.784-.001 4.241.57 4.241.57z"></svg:path>`,
})
export class TokenAbyssIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
