import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laSmsIcon],svg[la-sms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 5v20h5v5.094l1.625-1.313L13.344 25H30V5zm2 2h24v16H12.656l-.281.219L9 25.906V23H4zm4 5v2h16v-2zm0 4v2h12v-2z"></svg:path>`,
})
export class LaSmsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
