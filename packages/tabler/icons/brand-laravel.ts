import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBrandLaravelIcon],svg[tabler-brand-laravel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m3 17l8 5l7-4v-8l-4-2.5L18 5l4 2.5v4L11 18l-4-2.5V8L3 5.5zm8 1v4m-4-6.5l7-4m0-4v4m0 0l4 2.5"></svg:path><svg:path d="M11 13V5.5L7 3L3 5.5M7 8l4-2.5m7 4.5l4-2.5"></svg:path></svg:g>`,
})
export class TablerBrandLaravelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
