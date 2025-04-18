import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidChecklistIcon],svg[icon-park-solid-checklist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m34 10l8 8m0-8l-8 8m10 12l-7 8l-4-4"></svg:path><svg:path fill="currentColor" d="M26 10H4v8h22zm0 20H4v8h22z"></svg:path></svg:g>`,
})
export class IconParkSolidChecklistIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
