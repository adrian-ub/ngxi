import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psPosterousIcon],svg[ps-posterous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M61 462V288l2-3h5l1 1q30 50 98 50q60 0 103.5-44T314 164q0-72-38-117T177 2Q100 2 63 63l-2 1h-5L53 8H6q3 48 3 104v350zm0-320q0-7 5-24q7-34 33.5-55T159 42q44 0 72.5 35t28.5 90q0 58-28 93.5T157 296q-33 0-58.5-20T64 224q-3-11-3-25z"></svg:path>`,
})
export class PsPosterousIcon {
  readonly viewBox = input("0 0 320 488")
  readonly width = input("0.66em")
  readonly height = input("1em")
}
