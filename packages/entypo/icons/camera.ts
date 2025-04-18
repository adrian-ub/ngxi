import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoCameraIcon],svg[entypo-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 8a3 3 0 1 0 0 6a3 3 0 0 0 0-6m8-3h-2.4a.89.89 0 0 1-.789-.57l-.621-1.861A.89.89 0 0 0 13.4 2H6.6c-.33 0-.686.256-.789.568L5.189 4.43A.89.89 0 0 1 4.4 5H2C.9 5 0 5.9 0 7v9c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m-8 11a5 5 0 0 1-5-5a5 5 0 1 1 10 0a5 5 0 0 1-5 5m7.5-7.8a.7.7 0 1 1 0-1.4a.7.7 0 0 1 0 1.4"></svg:path>`,
})
export class EntypoCameraIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
