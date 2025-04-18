import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIbmCloudSecretsManagerIcon],svg[carbon-ibm-cloud-secrets-manager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 16c0-.7-.2-1.4-.6-2l3.3-3.3l-1.4-1.4l-3.3 3.3c-.6-.4-1.3-.6-2-.6s-1.4.2-2 .6l-3.3-3.3l-1.4 1.4l3.3 3.3c-.4.6-.6 1.3-.6 2s.2 1.4.6 2l-3.3 3.3l1.4 1.4l3.3-3.3c.6.4 1.3.6 2 .6s1.4-.2 2-.6l3.3 3.3l1.4-1.4l-3.3-3.3c.4-.6.6-1.3.6-2m-4 2c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"></svg:path><svg:path fill="currentColor" d="M26 17h6v-2h-2.1C29.4 7.7 23.4 2 16 2C8.3 2 2 8.3 2 16s6.3 14 14 14c5.2 0 9.7-2.8 12.1-7l-1.7-1c-2.1 3.6-5.9 6-10.4 6c-6.6 0-12-5.4-12-12S9.4 4 16 4c6.3 0 11.4 4.9 11.9 11H26z"></svg:path>`,
})
export class CarbonIbmCloudSecretsManagerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
