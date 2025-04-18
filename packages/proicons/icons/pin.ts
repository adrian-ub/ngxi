import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsPinIcon],svg[proicons-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7.77 16.233l-4.02 4.02M14.976 3.336l5.69 5.691a2 2 0 0 1-.698 3.282L16.595 13.6a4 4 0 0 0-2.426 2.674l-.689 2.5a1.5 1.5 0 0 1-2.507.662L4.568 13.03a1.5 1.5 0 0 1 .662-2.507l2.5-.688a4 4 0 0 0 2.673-2.427l1.291-3.372a2 2 0 0 1 3.282-.7"></svg:path>`,
})
export class ProiconsPinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
