import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPublishIcon],svg[ix-publish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.333 45.554L441.183 197.7l-29.033 31.266l-113.484-105.39v175.09c0 80.757-64.102 146.541-144.2 149.247l-5.133.087h-64v-42.667h64c57.36 0 104.145-45.276 106.568-102.04l.099-4.627l-.001-175.089l-113.483 105.389l-29.033-31.266z"></svg:path>`,
})
export class IxPublishIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
