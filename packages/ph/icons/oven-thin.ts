import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phOvenThinIcon],svg[ph-oven-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM76 76a8 8 0 1 1 8 8a8 8 0 0 1-8-8m44 0a8 8 0 1 1 8 8a8 8 0 0 1-8-8m44 0a8 8 0 1 1 8 8a8 8 0 0 1-8-8m20 32H72a4 4 0 0 0-4 4v72a4 4 0 0 0 4 4h112a4 4 0 0 0 4-4v-72a4 4 0 0 0-4-4m-4 72H76v-64h104Z"></svg:path>`,
})
export class PhOvenThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
