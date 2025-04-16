import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsGooglecloudstorageIcon],svg[simple-icons-googlecloudstorage-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 2.4v8.4h-2.4V2.4zM0 10.8h2.4V2.4H0zm3-8.4h18v8.4H3zm12.6 4.2a1.8 1.8 0 1 0 3.6 0a1.8 1.8 0 0 0-3.6 0m-10.8.6H12V6H4.8zm16.8 14.4H24v-8.4h-2.4zM0 21.6h2.4v-8.4H0zm3-8.4h18v8.4H3zm12.6 4.2a1.8 1.8 0 1 0 3.6 0a1.8 1.8 0 0 0-3.6 0M4.8 18H12v-1.2H4.8z"></svg:path>`,
})
export class SimpleIconsGooglecloudstorageIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
