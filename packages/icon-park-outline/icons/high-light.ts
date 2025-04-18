import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHighLightIcon],svg[icon-park-outline-high-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 44V25h6v-8h24v8h6v19z"></svg:path><svg:path stroke-linecap="round" d="M17 17V8l14-4v13"></svg:path></svg:g>`,
})
export class IconParkOutlineHighLightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
