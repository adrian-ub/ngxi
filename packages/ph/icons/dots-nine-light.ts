import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDotsNineLightIcon],svg[ph-dots-nine-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M70 60a10 10 0 1 1-10-10a10 10 0 0 1 10 10m58-10a10 10 0 1 0 10 10a10 10 0 0 0-10-10m68 20a10 10 0 1 0-10-10a10 10 0 0 0 10 10M60 118a10 10 0 1 0 10 10a10 10 0 0 0-10-10m68 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10m68 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10M60 186a10 10 0 1 0 10 10a10 10 0 0 0-10-10m68 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10m68 0a10 10 0 1 0 10 10a10 10 0 0 0-10-10"></svg:path>`,
})
export class PhDotsNineLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
