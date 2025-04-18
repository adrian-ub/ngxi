import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHotelsComIcon],svg[arcticons-hotels-com-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5H14.328a2 2 0 0 0-1.414.586L5.5 13.5h29v29l7.414-7.414a2 2 0 0 0 .586-1.414V9.5a4 4 0 0 0-4-4"></svg:path><svg:rect width="8" height="8" x="7.5" y="19.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1" ry="1"></svg:rect><svg:rect width="8" height="8" x="20.5" y="19.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1" ry="1"></svg:rect><svg:rect width="8" height="8" x="20.5" y="32.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1" ry="1"></svg:rect>`,
})
export class ArcticonsHotelsComIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
