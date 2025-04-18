import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMergePhotosIcon],svg[arcticons-merge-photos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.833 20.503v6.826L4.5 33.221V14.779zm8.334.497v6.21L43.5 33.102V14.898z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.735 17.946v12.133h-15.47V17.921c5.151.052 10.315.025 15.47.025"></svg:path>`,
})
export class ArcticonsMergePhotosIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
