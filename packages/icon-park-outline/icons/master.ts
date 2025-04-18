import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMasterIcon],svg[icon-park-outline-master-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 38V6a2 2 0 0 0-2-2H12a2 2 0 0 0-2 2v32"></svg:path><svg:rect width="28" height="12" x="10" y="32" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="6"></svg:rect><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="m20 16l4-4l4 4l4-4l-3 11H19l-3-11z"></svg:path><svg:circle cx="32" cy="38" r="2" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkOutlineMasterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
