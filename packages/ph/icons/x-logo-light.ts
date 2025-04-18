import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phXLogoLightIcon],svg[ph-x-logo-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.06 212.78l-63.42-99.66L212.44 44a6 6 0 1 0-8.88-8L143 102.62l-41.9-65.84A6 6 0 0 0 96 34H48a6 6 0 0 0-5.06 9.22l63.42 99.66L43.56 212a6 6 0 0 0 8.88 8L113 153.38l41.9 65.84A6 6 0 0 0 160 222h48a6 6 0 0 0 5.06-9.22M163.29 210L58.93 46h33.78l104.36 164Z"></svg:path>`,
})
export class PhXLogoLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
