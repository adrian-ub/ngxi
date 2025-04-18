import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFingerprint1SolidIcon],svg[streamline-fingerprint-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M1.75 6.75a5.25 5.25 0 1 1 10.5 0v2a.75.75 0 0 0 1.5 0v-2a6.75 6.75 0 0 0-13.5 0v6.5a.75.75 0 0 0 1.5 0zm3 5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0zM7 5a2.25 2.25 0 0 0-2.25 2.25v1.5a.75.75 0 0 1-1.5 0v-1.5a3.75 3.75 0 1 1 7.5 0v6a.75.75 0 0 1-1.5 0v-6A2.25 2.25 0 0 0 7 5m6.75 6.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0zM7 11.5a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1A.75.75 0 0 1 7 11.5m.75-3.75a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineFingerprint1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
