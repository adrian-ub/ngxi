import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fadFilterBandpassIcon],svg[fad-filter-bandpass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M25.344 180.07a4.01 4.01 0 0 1 3.997-4.01h16.996c6.631 0 14.517-4.753 17.611-10.614l47.246-89.476c9.282-17.579 24.376-17.602 33.72-.042l47.637 89.532c3.115 5.855 11.007 10.6 17.65 10.6h16.489a4.01 4.01 0 0 1 4.001 4.01v8.809c0 2.214-1.8 4.009-4.007 4.009h-24.49c-8.838 0-19.361-6.32-23.513-14.133L136.446 99.28c-4.665-8.778-12.228-8.772-16.887 0l-42.21 79.475c-4.145 7.805-14.667 14.133-23.508 14.133h-24.49a4.01 4.01 0 0 1-4.007-4.01z"></svg:path>`,
})
export class FadFilterBandpassIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
