import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirShareAndroidIcon],svg[iconoir-share-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M18 22a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0-14a3 3 0 1 0 0-6a3 3 0 0 0 0 6M6 15a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path><svg:path d="m15.5 6.5l-7 4m0 3l7 4"></svg:path></svg:g>`,
})
export class IconoirShareAndroidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
