import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8LockIcon],svg[icons8-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3c-3.845 0-7 3.155-7 7v3H6v16h20V13h-3v-3c0-3.845-3.155-7-7-7m0 2c2.755 0 5 2.245 5 5v3H11v-3c0-2.755 2.245-5 5-5M8 15h16v12H8z"></svg:path>`,
})
export class Icons8LockIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
