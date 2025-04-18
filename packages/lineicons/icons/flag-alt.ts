import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineiconsFlagAltIcon],svg[lineicons-flag-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m51.9 33.7l-3.4-8l3.4-8c.1-.1.1-.3.1-.4v-.5c0-1.2-1-2.3-2.3-2.3H34.3v-2.8c0-1.2-1-2.3-2.3-2.3H16.4V4c0-1.2-1-2.3-2.3-2.3s-2.3 1-2.3 2.3v56c0 1.2 1 2.3 2.3 2.3s2.3-1 2.3-2.3V31.7h13.3v1.8c0 1.8 1.5 3.3 3.3 3.3h16.7c1.2 0 2.3-1 2.3-2.3c.1-.3 0-.6-.1-.8m-35.5-6.5V13.9h13.3v13.3zM34.3 19h12.2l-2.8 6.7l2.8 6.7H34.3z"></svg:path>`,
})
export class LineiconsFlagAltIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
