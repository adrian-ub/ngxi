import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenUw3sIcon],svg[token-uw3s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.149 8.62H8.62v6.528A6.084 6.084 0 0 1 4.782 4.782A6.083 6.083 0 0 1 15.148 8.62"></svg:path><svg:path fill="currentColor" d="M8.834 15.047A6.207 6.207 0 0 0 15.04 8.62H21V21H8.62v-5.964z"></svg:path>`,
})
export class TokenUw3sIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
