import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPills424pxIcon],svg[healthicons-pills-4-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.5 22a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m1.03-4.47a.75.75 0 1 0-1.06-1.06l-1 1a.75.75 0 1 0 1.06 1.06zM7.5 12a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m-.03-3.47a.75.75 0 0 0 1.06-1.06l-1-1a.75.75 0 0 0-1.06 1.06zM17.5 11a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m1.03-4.47a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06zM17.5 22a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m-.707-5.25a.75.75 0 0 0 0 1.5h1.414a.75.75 0 0 0 0-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsPills424pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
