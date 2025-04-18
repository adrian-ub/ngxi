import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laMedalIcon],svg[la-medal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 3l4.266 10.36C8.71 14.948 7 17.774 7 21c0 4.962 4.037 9 9 9s9-4.038 9-9c0-3.225-1.71-6.051-4.266-7.64L25 3h-2.162l-3.912 9.498a9 9 0 0 0-2.06-.453L20.587 3h-2.162l-3.752 9.11a9 9 0 0 0-1.6.388L9.162 3zm4.412 0l2.541 6.174l1.082-2.627L13.575 3zM16 14c3.859 0 7 3.14 7 7s-3.141 7-7 7s-7-3.14-7-7s3.141-7 7-7m0 3.162l-1.168 2.62l-2.832.31l2.12 1.904l-.597 2.81L16 23.378l2.477 1.43l-.596-2.81L20 20.091l-2.832-.31z"></svg:path>`,
})
export class LaMedalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
