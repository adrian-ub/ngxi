import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixOptimizeIcon],svg[ix-optimize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 448.055h384V405.39H64zM405.683 64l-107.008.064v42.645h76.502L268.51 213.397H161.822l-91.563 91.584l30.166 30.166l79.082-79.083h106.646l119.53-119.53v76.778h42.667V64z"></svg:path>`,
})
export class IxOptimizeIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
