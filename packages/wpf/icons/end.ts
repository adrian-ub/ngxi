import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[wpfEndIcon],svg[wpf-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 5c-.551 0-1 .449-1 1v4.875L7.906 5.25a1.34 1.34 0 0 0-1.281.063C6.239 5.545 6 5.963 6 6.405v13.188c0 .443.239.86.625 1.093c.208.127.449.188.688.188c.2 0 .408-.033.593-.125L15 15.125V20c0 .551.449 1 1 1h3c.551 0 1-.449 1-1V6c0-.551-.449-1-1-1z"></svg:path>`,
})
export class WpfEndIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
