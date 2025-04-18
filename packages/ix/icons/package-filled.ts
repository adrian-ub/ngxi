import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixPackageFilledIcon],svg[ix-package-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 173.836v188.83l170.667 94.815V268.557zm213.333 283.645L448 362.666v-188.92l-170.667 94.806zm-84.03-379.087l62.702-34.8l169.367 93.914l-62.712 34.837zm-43.967 24.401l169.377 93.963l-62.717 34.839l-169.367-93.999z" clip-rule="evenodd"></svg:path>`,
})
export class IxPackageFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
