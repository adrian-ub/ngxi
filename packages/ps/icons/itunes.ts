import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psItunesIcon],svg[ps-itunes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M232 2Q137 2 69.5 69.5T2 232t67.5 162.5T232 462t162.5-67.5T462 232T394.5 69.5T232 2m0 414q-76 0-130-54T48 232t54-130t130-54t130 54t54 130t-54 130t-130 54m84-122q1 14-8.5 26T283 334q-14 1-25-8t-13-23q-1-15 9-26.5t24-13.5q8-1 18 2v-96l-93 17v121q1 15-8 26.5T171 347q-15 1-26-8t-13-23q-1-15 8.5-27t24.5-13q8-1 18 2V140l133-23z"></svg:path>`,
})
export class PsItunesIcon {
  readonly viewBox = input("0 0 464 488")
  readonly width = input("0.96em")
  readonly height = input("1em")
}
