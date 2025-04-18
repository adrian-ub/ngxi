import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineInterfaceUploadSquareArrowDownloadInternetNetworkServerSquareUpUploadIcon],svg[streamline-interface-upload-square-arrow-download-internet-network-server-square-up-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="13" x=".5" y=".5" rx="3"></svg:rect><svg:path d="m4 7l3-3.5L10 7M7 3.5v7"></svg:path></svg:g>`,
})
export class StreamlineInterfaceUploadSquareArrowDownloadInternetNetworkServerSquareUpUploadIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
