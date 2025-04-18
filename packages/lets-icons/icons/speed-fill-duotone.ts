import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSpeedFillDuotoneIcon],svg[lets-icons-speed-fill-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".25" d="M21 14v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1a9 9 0 0 1 18 0"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M15.832 10.555a1 1 0 0 0-1.664-1.11l-1.714 2.572a3 3 0 0 0-.311-.017h-.286A2.857 2.857 0 0 0 9 14.857c0 .08.064.143.143.143h5.714a.143.143 0 0 0 .143-.143c0-.743-.284-1.42-.75-1.93z" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsSpeedFillDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
