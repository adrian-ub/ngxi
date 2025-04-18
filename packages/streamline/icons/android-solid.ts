import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAndroidSolidIcon],svg[streamline-android-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.53.241a.75.75 0 1 0-1.06 1.06l1.29 1.292a4.33 4.33 0 0 0-1.07 2.491h8.62a4.33 4.33 0 0 0-1.07-2.49l1.29-1.292a.75.75 0 1 0-1.06-1.06L9.056 1.654a4.33 4.33 0 0 0-4.112 0L3.53.24Zm.644 11.167h5.652v1.752a.75.75 0 0 0 1.5 0V7.608a1.15 1.15 0 0 1 1.101 1.15v.9a.75.75 0 1 0 1.5 0v-.9a2.65 2.65 0 0 0-2.65-2.65H2.723a2.65 2.65 0 0 0-2.651 2.65v.9a.75.75 0 1 0 1.5 0v-.9a1.15 1.15 0 0 1 1.1-1.15v5.552a.75.75 0 0 0 1.5 0v-1.752Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineAndroidSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
