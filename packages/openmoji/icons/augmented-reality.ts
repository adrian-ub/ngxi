import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiAugmentedRealityIcon],svg[openmoji-augmented-reality-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fff" d="M12.119 17.948h48.005a6.79 6.79 0 0 1 6.788 6.788v23.657H4.845V25.222a7.277 7.277 0 0 1 7.274-7.274"></svg:path><svg:path fill="#9b9b9a" d="m6.808 55.158l15.261-21.746l8.591 8.59l15.982-15.981l19.077 29.854H6.281z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m6.808 55.158l15.261-21.746l8.591 8.59l15.982-15.981l19.077 29.854H6.281z"></svg:path><svg:path d="M38 17.021h22.021A7.98 7.98 0 0 1 68 25v24.235H4V25a7.98 7.98 0 0 1 7.979-7.979h21.938L36 21.625z"></svg:path><svg:path d="M8.208 24.125v-3H11m4.521 0h3v2.792m0 4.521v3h-2.792m-4.521 0h-3v-2.792"></svg:path><svg:circle cx="13.229" cy="26.146" r="2.021"></svg:circle><svg:path d="M62.837 26.021H40.642m27.217 0h-5.022m5.022 3.217h-5.022m5.022 3.218h-5.022m5.022 3.217h-5.022m5.022 3.218h-5.022m5.022 3.217h-5.022m5.022 3.217h-5.022m-16.266 3.91V20.06"></svg:path></svg:g>`,
})
export class OpenmojiAugmentedRealityIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
