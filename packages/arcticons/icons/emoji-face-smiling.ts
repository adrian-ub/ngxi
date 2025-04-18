import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEmojiFaceSmilingIcon],svg[arcticons-emoji-face-smiling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M28.53 33.668c-.904 1.02-2.454 1.672-4.651 1.672c-2.181 0-3.732-.645-4.645-1.653m-7.212-16.764a5.07 5.07 0 0 1 2.727-2.413a5.07 5.07 0 0 1 3.644-.339m17.447 2.752a5.78 5.78 0 0 0-6.363-2.76m-15.544 8.426s3.163-1.745 6.435 0m7.44 0s3.163-1.745 6.435 0"></svg:path><svg:circle cx="24" cy="24" r="18.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsEmojiFaceSmilingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
