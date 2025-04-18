import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiGuitarPickIcon],svg[mdi-guitar-pick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4.1c-.9-.8-2-1.3-3.2-1.6c-.3-.1-2.2-.5-3.6-.5h-.4c-1.4 0-3.4.4-3.7.5c-1.1.3-2.2.8-3.1 1.6C3 5.9 3 8.7 4 11c1 2.5 2.1 4.7 3.6 6.9C8.8 19.6 10.1 22 12 22s3.2-2.4 4.5-4.1c1.5-2.1 2.6-4.4 3.6-6.9c.9-2.3.9-5.1-1.1-6.9"></svg:path>`,
})
export class MdiGuitarPickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
