import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flagEh1x1Icon],svg[flag-eh-1x1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#000001" d="M0 0h512v256H0z"></svg:path><svg:path fill="#007a3d" d="M0 256h512v256H0z"></svg:path><svg:path fill="#fff" d="M0 149.3h512v213.3H0z"></svg:path><svg:path fill="#c4111b" d="m0 0l256 256L0 512Z"></svg:path><svg:g stroke-width="1.7" transform="translate(-135 -6.5)scale(1.02539)"><svg:circle cx="512" cy="256" r="68.3" fill="#c4111b"></svg:circle><svg:circle cx="537.6" cy="256" r="68.3" fill="#fff"></svg:circle><svg:path fill="#c4111b" d="m493.7 297.3l29-20.8l29 21.2l-10.8-34.2l29-21l-35.8-.2l-11-34l-11.3 33.9l-35.7-.1l28.7 21.2z"></svg:path></svg:g>`,
})
export class FlagEh1x1Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
