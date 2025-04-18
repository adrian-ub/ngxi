import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMuckeIcon],svg[arcticons-mucke-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.1 6.6h-5.6l-4.8 3.5V6.6h-10l-4.9 3.7V6.6H5.5v34.8l7.3-7.1V14h7.5v27.4l7.4-7.7V14h7.4v27l7.4-7.7V6.6z"></svg:path>`,
})
export class ArcticonsMuckeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
