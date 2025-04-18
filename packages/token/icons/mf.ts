import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenMfIcon],svg[token-mf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M16.82 3H7.18C4.855 3 3 4.93 3 7.348v9.304C3 19.065 4.896 21 7.18 21h9.64c2.324 0 4.18-1.974 4.18-4.348V7.348C21 4.935 19.104 3 16.82 3M8.772 9.486a1.58 1.58 0 0 1-1.254-1.8a1.524 1.524 0 0 1 1.75-1.294l7.65 1.372a1.58 1.58 0 0 1 1.253 1.8a1.525 1.525 0 0 1-1.749 1.294zm-.613 4.387a1.5 1.5 0 0 1-1.193-1.755a1.48 1.48 0 0 1 1.721-1.215l4.9.911c.826.152 1.35.956 1.198 1.755a1.48 1.48 0 0 1-1.14 1.203c-.19.043-.389.047-.582.012zm-1.52 3.377c.228.333.577.563.973.64l1.547.275c.81.152 1.547-.428 1.693-1.277a1.53 1.53 0 0 0-1.215-1.778l-1.547-.275c-.81-.152-1.547.427-1.693 1.277a1.53 1.53 0 0 0 .242 1.138" clip-rule="evenodd"></svg:path>`,
})
export class TokenMfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
