import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineAppStoreIcon],svg[streamline-app-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M1.805 12.584a.977.977 0 0 0 1.791.247l.21-.36m3.112-3.035H5.566l1.444-2.49l1.938-3.342a.977.977 0 0 0-1.69-.98l-.248.427l-.247-.427a.977.977 0 1 0-1.69.98l.808 1.394l-2.574 4.438H1.602a.977.977 0 1 0 0 1.954H7.75"></svg:path><svg:path d="m8.939 6.324l1.775 3.113h1.556a.977.977 0 0 1 0 1.954h-.423l.268.461a.977.977 0 1 1-1.69.98L7.939 8.575"></svg:path></svg:g>`,
})
export class StreamlineAppStoreIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
