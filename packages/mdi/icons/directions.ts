import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiDirectionsIcon],svg[mdi-directions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14.5V12h-4v3H8v-4a1 1 0 0 1 1-1h5V7.5l3.5 3.5m4.21.29l-9-9h-.01a.996.996 0 0 0-1.41 0l-9 9c-.39.39-.39 1.03 0 1.42l9 9c.39.38 1.02.39 1.42 0l9-9c.39-.39.39-1.03 0-1.42"></svg:path>`,
})
export class MdiDirectionsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
