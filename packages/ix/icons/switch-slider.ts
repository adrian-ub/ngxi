import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixSwitchSliderIcon],svg[ix-switch-slider-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M106.667 128h106.666V85.333H64v192h149.333v-42.667H106.667zM384 85.333H234.667v192H384zM405.333 384c0 35.347-28.652 64-64 64s-64-28.653-64-64s28.653-64 64-64s64 28.652 64 64m21.334 0a85.6 85.6 0 0 1-2.688 21.333h45.354v-42.667H423.98A85.6 85.6 0 0 1 426.667 384M128 405.333h130.688A85.6 85.6 0 0 1 256 384a85.6 85.6 0 0 1 2.688-21.334H128z"></svg:path>`,
})
export class IxSwitchSliderIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
