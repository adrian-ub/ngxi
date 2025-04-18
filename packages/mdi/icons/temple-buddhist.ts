import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiTempleBuddhistIcon],svg[mdi-temple-buddhist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 9c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2H1c0 1.9 1.3 3.4 3 3.8V22h6v-3c0-1.1.9-2 2-2s2 .9 2 2v3h6v-9.1c.5-.1 3-1 3-3.9zM6 8.9V10h12V8.9c.5-.1 3-1 3-3.9h-2c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2H3c0 1.9 1.3 3.4 3 3.9M12 1L8.2 6h7.5z"></svg:path>`,
})
export class MdiTempleBuddhistIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
