import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPills224pxIcon],svg[healthicons-pills-2-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.5 13a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11m1.53-5.97a.75.75 0 0 0-1.06-1.06l-2 2a.75.75 0 0 0 1.06 1.06zM16.5 22a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11m.47-3.97a.75.75 0 1 0 1.06-1.06l-2-2a.75.75 0 1 0-1.06 1.06z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPills224pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
