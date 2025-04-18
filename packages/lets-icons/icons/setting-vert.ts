import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSettingVertIcon],svg[lets-icons-setting-vert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M11.5 8.5v-4m-5 10v4m10-2v2m-5 0v-6m-5-8v6m10-6v8m-7-4h4m-9 6h4m6 2h4"></svg:path>`,
})
export class LetsIconsSettingVertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
