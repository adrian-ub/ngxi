import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faInboxIcon],svg[fa-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1023 704h316q-1-3-2.5-8.5t-2.5-7.5l-212-496H414L202 688q-1 3-2.5 8.5T197 704h316l95 192h320zm513 30v482q0 26-19 45t-45 19H64q-26 0-45-19t-19-45V734q0-62 25-123L263 59q10-25 36.5-42T352 0h832q26 0 52.5 17t36.5 42l238 552q25 61 25 123"></svg:path>`,
})
export class FaInboxIcon {
  readonly viewBox = input("0 0 1536 1280")
  readonly width = input("1.2em")
  readonly height = input("1em")
}
