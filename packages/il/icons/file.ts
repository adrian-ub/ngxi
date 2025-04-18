import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ilFileIcon],svg[il-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M347 240q-9 0-16-7t-7-16V8l232 232zm-69-23q0 29 20 49t49 20h209v440q0 10-6 17t-17 7H23q-10 0-16-7t-7-17V31q0-9 7-16t16-7h255z"></svg:path>`,
})
export class IlFileIcon {
  readonly viewBox = input("0 0 560 850")
  readonly width = input("0.66em")
  readonly height = input("1em")
}
