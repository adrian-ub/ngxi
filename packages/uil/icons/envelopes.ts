import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilEnvelopesIcon],svg[uil-envelopes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 21.63H5a3 3 0 0 1-3-3v-8a1 1 0 0 0-2 0v8a5 5 0 0 0 5 5h12a1 1 0 0 0 0-2m4-18H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-10a3 3 0 0 0-3-3m-.41 2l-5.88 5.88a1 1 0 0 1-1.42 0L7.41 5.63Zm1.41 11a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7l5.88 5.88a3 3 0 0 0 4.24 0L22 7Z"></svg:path>`,
})
export class UilEnvelopesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
