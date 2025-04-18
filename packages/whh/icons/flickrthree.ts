import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFlickrthreeIcon],svg[whh-flickrthree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M800 504q-93 0-158.5-65.5T576 280t65.5-158.5T800 56t158.5 65.5T1024 280t-65.5 158.5T800 504m0-384q-66 0-113 47t-47 113t47 113t113 47t113-47t47-113t-47-113t-113-47M224 504q-93 0-158.5-65.5T0 280t65.5-158.5T224 56t158.5 65.5T448 280t-65.5 158.5T224 504"></svg:path>`,
})
export class WhhFlickrthreeIcon {
  readonly viewBox = input("0 0 1024 614")
  readonly width = input("1.67em")
  readonly height = input("1em")
}
