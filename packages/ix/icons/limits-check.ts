import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixLimitsCheckIcon],svg[ix-limits-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M277.333 85.33V42.665H64v42.667h97.813l-91.562 91.584l30.165 30.165l48.917-48.917v247.168H192V158.163l48.917 48.917l30.166-30.165l-91.563-91.584zm0 384.001v-42.667H64v42.667zm198.244-146.994l-33.818-26.014l-92.83 120.655l-68.213-59.703l-28.096 32.11l102.435 89.631z" clip-rule="evenodd"></svg:path>`,
})
export class IxLimitsCheckIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
