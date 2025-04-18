import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsShareAndroidPrintIcon],svg[pepicons-share-android-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M7.175 14.207a2.5 2.5 0 1 1 .233-4.274l5.093-3.01a2.5 2.5 0 1 1 .434 1.487l-4.593 2.714a2.494 2.494 0 0 1-.09 1.963l4.658 2.54a2.5 2.5 0 1 1-.408 1.486l-5.327-2.905Z" clip-rule="evenodd" opacity=".8"></svg:path><svg:path fill-rule="evenodd" d="M5 12.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Zm0-4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm9-1a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Zm0-4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Zm0 14a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Zm0-4a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3Z" clip-rule="evenodd"></svg:path><svg:path d="m6.754 9.18l-.508-.86l5.5-3.25l.508.86l-5.5 3.25ZM12 14.878l.479-.878l-5.5-3l-.479.878l5.5 3Z"></svg:path></svg:g>`,
})
export class PepiconsShareAndroidPrintIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
