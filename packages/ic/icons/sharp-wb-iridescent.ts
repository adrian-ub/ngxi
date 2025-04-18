import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpWbIridescentIcon],svg[ic-sharp-wb-iridescent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 15h14V9.05H5zm6-14v3h2V1zm8.04 2.6l-1.79 1.79l1.41 1.41l1.8-1.79zM13 23v-2.95h-2V23zm7.45-3.91l-1.8-1.79l-1.41 1.41l1.79 1.8zM3.55 5.01L5.34 6.8l1.41-1.41L4.96 3.6zM4.96 20.5l1.79-1.8l-1.41-1.41l-1.79 1.79z"></svg:path>`,
})
export class IcSharpWbIridescentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
