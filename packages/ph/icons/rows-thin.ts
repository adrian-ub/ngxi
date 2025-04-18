import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phRowsThinIcon],svg[ph-rows-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 140H48a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12v-40a12 12 0 0 0-12-12m4 52a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-40a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Zm-4-140H48a12 12 0 0 0-12 12v40a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V64a12 12 0 0 0-12-12m4 52a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V64a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4Z"></svg:path>`,
})
export class PhRowsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
