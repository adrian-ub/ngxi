import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeClipboardIcon],svg[icomoon-free-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 2H10a2 2 0 1 0-4 0H1.5a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5M8 1a1 1 0 1 1 0 2a1 1 0 0 1 0-2m6 14H2V3h2v1.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V3h2z"></svg:path><svg:path fill="currentColor" d="M7 13.414L3.793 9.707l.914-.914L7 10.586l4.293-3.793l.914.914z"></svg:path>`,
})
export class IcomoonFreeClipboardIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
