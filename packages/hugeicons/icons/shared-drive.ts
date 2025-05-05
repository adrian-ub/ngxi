import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSharedDriveIcon],svg[hugeicons-shared-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M18 18H6a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4M9.5 8.5a1 1 0 1 0 0-2m0 2a1 1 0 0 1 0-2m0 2v-2m-1.5 6h3m-4 1V13a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v.5zm7.5-5a1 1 0 1 0 0-2m0 2a1 1 0 1 1 0-2m0 2v-2m0 6H16m-1.5 1H17V13a2 2 0 0 0-2-2h-.5zm2 6.5v.01m-3-.01v.01"></svg:path><svg:path d="M20 20V8c0-2.828 0-4.243-.879-5.121C18.243 2 16.828 2 14 2h-4c-2.828 0-4.243 0-5.121.879C4 3.757 4 5.172 4 8v12"></svg:path></svg:g>`,
})
export class HugeiconsSharedDriveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
