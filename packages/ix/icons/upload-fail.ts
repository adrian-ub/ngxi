import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixUploadFailIcon],svg[ix-upload-fail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M341.334 406.114v42.667H42.667v-42.667zm80.832-197.26l30.165 30.165l-59.584 59.584l59.584 59.584l-30.165 30.165l-59.584-59.584l-59.584 59.584l-30.166-30.165l59.584-59.584l-59.584-59.584l30.166-30.166l59.584 59.584zM192.009 57.6l138.666 115.356l-26.684 32.052l-91.135-76.02v212.345h-41.694V128.99l-91.136 76.02l-26.684-32.053z"></svg:path>`,
})
export class IxUploadFailIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
