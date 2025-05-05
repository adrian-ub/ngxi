import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixBatteryFullCheckIcon],svg[ix-battery-full-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M469.333 213.333h-42.666V128h-384v256h384v-82.667h42.666zm-178.413-32l35.501 23.668l-79.602 119.402l-76.152-76.152l30.17-30.17l39.338 39.322z" clip-rule="evenodd"></svg:path>`,
})
export class IxBatteryFullCheckIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
