import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMarkerCircleFillIcon],svg[ph-marker-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m40 182.37a87.89 87.89 0 0 1-80 0V176h80ZM104 160v-16h48v16Zm80 35.83V176a16 16 0 0 0-16-16v-16a16 16 0 0 0-13.61-15.8l-10.73-51.46a16 16 0 0 0-31.32 0l-10.73 51.46A16 16 0 0 0 88 144v16a16 16 0 0 0-16 16v19.83a88 88 0 1 1 112 0"></svg:path>`,
})
export class PhMarkerCircleFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
