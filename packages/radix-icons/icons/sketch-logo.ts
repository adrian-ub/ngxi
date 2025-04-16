import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[radixIconsSketchLogoIcon],svg[radix-icons-sketch-logo-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M7.537.827a.4.4 0 0 0-.074 0l-3.5.35a.38.38 0 0 0-.266.152L.7 5.425a.37.37 0 0 0 .012.465l6.498 7.898a.375.375 0 0 0 .58 0l6.498-7.898a.37.37 0 0 0 .087-.238v-.024a.37.37 0 0 0-.075-.203L11.303 1.33a.38.38 0 0 0-.266-.152zm3.388 4.448v-.023l-.003.023zm.01-.1h2.253l-1.939-2.649zm-.364-3.291l-2.527-.253l2.13 3.58zm-3.615-.253l-2.527.253l.396 3.326zm-3.206.895L1.812 5.175h2.254zM1.794 6.025l4.965 6.034l-2.535-5.992l-.015-.042zm3.357 0L7.5 12.108l2.35-6.083zm5.64 0l-.015.042l-2.535 5.992l4.965-6.034zM7.5 2.183l1.84 3.092H5.66z" clip-rule="evenodd"></svg:path>`,
})
export class RadixIconsSketchLogoIcon {
  readonly viewBox = input('0 0 15 15')
  readonly width = input('1em')
  readonly height = input('1em')
}
