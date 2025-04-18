import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phRepeatLightIcon],svg[ph-repeat-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 128a70.08 70.08 0 0 1 70-70h113.51l-13.75-13.76a6 6 0 0 1 8.48-8.48l24 24a6 6 0 0 1 0 8.48l-24 24a6 6 0 0 1-8.48-8.48L209.51 70H96a58.07 58.07 0 0 0-58 58a6 6 0 0 1-12 0m198-6a6 6 0 0 0-6 6a58.07 58.07 0 0 1-58 58H46.49l13.75-13.76a6 6 0 0 0-8.48-8.48l-24 24a6 6 0 0 0 0 8.48l24 24a6 6 0 0 0 8.48-8.48L46.49 198H160a70.08 70.08 0 0 0 70-70a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhRepeatLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
