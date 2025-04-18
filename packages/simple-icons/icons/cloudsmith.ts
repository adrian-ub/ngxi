import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsCloudsmithIcon],svg[simple-icons-cloudsmith-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 10.667v2.667L13.333 24h-2.666L0 13.334v-2.667L10.667 0h2.666zm-12 6.869a5.535 5.535 0 1 0 0-11.07a5.535 5.535 0 0 0 0 11.07"></svg:path>`,
})
export class SimpleIconsCloudsmithIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
