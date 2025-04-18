import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[rivetIconsVideoOffIcon],svg[rivet-icons-video-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.197 4.218l2.51-2.51L14.293.292l-14 14l1.414 1.414L3.414 14H12v-2.367l4 .5V3.867zM10.893 6.52L14 6.133v3.734l-4-.5V12H5.414l5.48-5.479ZM0 2h10.586l-2 2H2v6.586l-2 2z"></svg:path>`,
})
export class RivetIconsVideoOffIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
