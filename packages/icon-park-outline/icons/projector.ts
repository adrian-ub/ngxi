import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineProjectorIcon],svg[icon-park-outline-projector-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 16h6v16H4V16h20M6 38v-6h6v6zm36 0v-6h-6v6zM10 24h8"></svg:path><svg:circle cx="31" cy="16" r="7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:circle cx="31" cy="16" r="3" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkOutlineProjectorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
