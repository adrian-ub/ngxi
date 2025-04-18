import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPills2Outline24pxIcon],svg[healthicons-pills-2-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M9.03 7.03a.75.75 0 0 0-1.06-1.06l-2 2a.75.75 0 0 0 1.06 1.06z"></svg:path><svg:path fill-rule="evenodd" d="M13 7.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0m-2 0a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0" clip-rule="evenodd"></svg:path><svg:path d="M16.97 18.03a.75.75 0 1 0 1.06-1.06l-2-2a.75.75 0 1 0-1.06 1.06z"></svg:path><svg:path fill-rule="evenodd" d="M22 16.5a5.5 5.5 0 1 1-11 0a5.5 5.5 0 0 1 11 0m-2 0a3.5 3.5 0 1 1-7 0a3.5 3.5 0 0 1 7 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPills2Outline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
