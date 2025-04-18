import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiImageLockIcon],svg[mdi-image-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.8 16v-1.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V16c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3m-1.3 0h-3v-1.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3zM5 3c-1.1 0-2 .9-2 2v14a2 2 0 0 0 2 2h8.03c-.03-.1-.03-.2-.03-.3V18H5l3.5-4.5l2.5 3l3.5-4.5l.27.37C15.61 10.89 17.27 10 19 10c.69 0 1.37.16 2 .42V5a2 2 0 0 0-2-2z"></svg:path>`,
})
export class MdiImageLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
