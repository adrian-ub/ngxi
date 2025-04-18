import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCookieThinIcon],svg[ph-cookie-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M161.66 166.34a8 8 0 1 1-11.32 0a8 8 0 0 1 11.32 0m-75.32-8a8 8 0 1 0 11.32 0a8 8 0 0 0-11.32 0m3.32-56a8 8 0 1 0 0 11.32a8 8 0 0 0 0-11.32m36.68 16a8 8 0 1 0 11.32 0a8 8 0 0 0-11.32 0M228 128A100 100 0 1 1 128 28a4 4 0 0 1 4 4a44.05 44.05 0 0 0 44 44a4 4 0 0 1 4 4a44.05 44.05 0 0 0 44 44a4 4 0 0 1 4 4m-8.08 3.84a52.08 52.08 0 0 1-47.78-48a52.08 52.08 0 0 1-48-47.78a92 92 0 1 0 95.76 95.76Z"></svg:path>`,
})
export class PhCookieThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
