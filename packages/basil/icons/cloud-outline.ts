import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilCloudOutlineIcon],svg[basil-cloud-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.932 6.208a3.91 3.91 0 0 0-3.524 2.214a.75.75 0 0 1-.947.373a4.375 4.375 0 1 0-1.586 8.455h11.648a2.978 2.978 0 1 0-.77-5.855a.75.75 0 0 1-.939-.812q.027-.229.027-.465a3.91 3.91 0 0 0-3.91-3.91m-4.552.986a5.41 5.41 0 0 1 9.952 2.605q.095-.004.191-.004a4.478 4.478 0 0 1 0 8.955H6.875A5.875 5.875 0 1 1 8.38 7.194" clip-rule="evenodd"></svg:path>`,
})
export class BasilCloudOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
