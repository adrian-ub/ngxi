import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneNavigationIcon],svg[ic-twotone-navigation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.72 17.7l3.47-1.53l.81-.36l.81.36l3.47 1.53L12 7.27z" opacity=".3"></svg:path><svg:path fill="currentColor" d="m4.5 20.29l.71.71L12 18l6.79 3l.71-.71L12 2zm8.31-4.12l-.81-.36l-.81.36l-3.47 1.53L12 7.27l4.28 10.43z"></svg:path>`,
})
export class IcTwotoneNavigationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
