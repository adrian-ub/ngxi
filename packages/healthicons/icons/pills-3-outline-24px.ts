import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPills3Outline24pxIcon],svg[healthicons-pills-3-outline-24px-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M12.707 7.25a.75.75 0 0 0 0-1.5h-1.414a.75.75 0 0 0 0 1.5z"></svg:path><svg:path fill-rule="evenodd" d="M16.5 6.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" clip-rule="evenodd"></svg:path><svg:path d="M7.53 17.53a.75.75 0 1 0-1.06-1.06l-1 1a.75.75 0 1 0 1.06 1.06z"></svg:path><svg:path fill-rule="evenodd" d="M11 17.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" clip-rule="evenodd"></svg:path><svg:path d="M16.47 16.53a.75.75 0 1 0 1.06-1.06l-1-1a.75.75 0 1 0-1.06 1.06z"></svg:path><svg:path fill-rule="evenodd" d="M21 15.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m-2 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsPills3Outline24pxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
