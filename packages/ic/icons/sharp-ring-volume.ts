import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpRingVolumeIcon],svg[ic-sharp-ring-volume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.16 6.26l-1.41-1.41l-3.56 3.55l1.41 1.41s3.45-3.52 3.56-3.55M11 2h2v5h-2zM6.4 9.81L7.81 8.4L4.26 4.84L2.84 6.26c.11.03 3.56 3.55 3.56 3.55M0 17.39l3.68 3.68l3.92-3.11v-3.37c2.85-.93 5.94-.93 8.8 0v3.38l3.91 3.1L24 17.39c-6.41-7.19-17.59-7.19-24 0"></svg:path>`,
})
export class IcSharpRingVolumeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
