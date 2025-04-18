import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phExcludeFillIcon],svg[ph-exclude-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 160a80 80 0 0 1-158.64 14.64a80 80 0 0 0 93.28-93.28A80 80 0 0 1 240 160m-80-80a80.3 80.3 0 0 1 14.64 1.36a80 80 0 1 0-93.28 93.28A80 80 0 0 1 160 80"></svg:path>`,
})
export class PhExcludeFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
