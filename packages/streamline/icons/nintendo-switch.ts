import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineNintendoSwitchIcon],svg[streamline-nintendo-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M6.04.5H3.584a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3H6.04z"></svg:path><svg:path d="M2.289 4.479a1.023 1.023 0 1 0 2.046 0a1.023 1.023 0 1 0-2.046 0M7.96 13.5h2.455a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3H7.96z"></svg:path><svg:path d="M11.71 8.565a1.023 1.023 0 1 0-2.046 0a1.023 1.023 0 1 0 2.046 0"></svg:path></svg:g>`,
})
export class StreamlineNintendoSwitchIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
