import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icons8HddIcon],svg[icons8-hdd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.22 6l-.19.75l-3 12l-.03.125V26h26v-7.125l-.03-.125l-3-12l-.19-.75zm1.56 2h16.44l2.5 10H5.28zM5 20h22v4H5zm19 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class Icons8HddIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
