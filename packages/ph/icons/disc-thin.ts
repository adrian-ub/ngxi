import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phDiscThinIcon],svg[ph-disc-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m35.77 96a35.8 35.8 0 0 0-7.66-18.45l39.68-39.68A91.64 91.64 0 0 1 219.91 124Zm-7.77 4a28 28 0 1 1-28-28a28 28 0 0 1 28 28m-28 92a92 92 0 1 1 62.13-159.79l-39.68 39.68A36 36 0 1 0 163.77 132h56.14A92.11 92.11 0 0 1 128 220"></svg:path>`,
})
export class PhDiscThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
