import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTrolleySuitcaseThinIcon],svg[ph-trolley-suitcase-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M88 156h128a12 12 0 0 0 12-12V72a12 12 0 0 0-12-12h-36V40a12 12 0 0 0-12-12h-32a12 12 0 0 0-12 12v20H88a12 12 0 0 0-12 12v72a12 12 0 0 0 12 12m44-116a4 4 0 0 1 4-4h32a4 4 0 0 1 4 4v20h-40ZM84 72a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4v72a4 4 0 0 1-4 4H88a4 4 0 0 1-4-4Zm0 152a12 12 0 1 1-12-12a12 12 0 0 1 12 12m144 0a12 12 0 1 1-12-12a12 12 0 0 1 12 12m16-40a4 4 0 0 1-4 4H32a4 4 0 0 1 0-8h12V75.31a4 4 0 0 0-1.17-2.83L21.17 50.83a4 4 0 0 1 5.66-5.66l21.66 21.66A12 12 0 0 1 52 75.31V180h188a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhTrolleySuitcaseThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
