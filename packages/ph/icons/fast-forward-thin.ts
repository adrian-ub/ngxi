import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFastForwardThinIcon],svg[ph-fast-forward-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m246.52 118l-88.19-56.13a12 12 0 0 0-12.18-.39A11.66 11.66 0 0 0 140 71.84v44.59L54.33 61.87a12 12 0 0 0-12.18-.39A11.66 11.66 0 0 0 36 71.84v112.32a11.66 11.66 0 0 0 6.15 10.36a12 12 0 0 0 12.18-.39L140 139.57v44.59a11.66 11.66 0 0 0 6.15 10.36a12 12 0 0 0 12.18-.39L246.52 138a11.81 11.81 0 0 0 0-19.94Zm-108.3 13.19L50 187.38a3.91 3.91 0 0 1-4 .13a3.76 3.76 0 0 1-2-3.35V71.84a3.76 3.76 0 0 1 2-3.35a4 4 0 0 1 1.91-.5a3.94 3.94 0 0 1 2.13.63l88.18 56.16a3.8 3.8 0 0 1 0 6.44Zm104 0L154 187.38a3.91 3.91 0 0 1-4 .13a3.76 3.76 0 0 1-2-3.35V71.84a3.76 3.76 0 0 1 2-3.35a4 4 0 0 1 1.91-.5a3.94 3.94 0 0 1 2.13.63l88.18 56.16a3.8 3.8 0 0 1 0 6.44Z"></svg:path>`,
})
export class PhFastForwardThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
