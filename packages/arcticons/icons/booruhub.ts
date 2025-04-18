import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsBooruhubIcon],svg[arcticons-booruhub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.42 24H4.49m39 0H26.776m-16.715-3H4.49m5.571 6H4.49m5.571 3H4.49m5.571-12H4.49m27.857-3h-5.571m5.571 3h-5.571m5.571 3h-5.571m5.571 6h-5.571m5.571 3h-5.571m5.591 3h-5.571M43.49 15h-5.57m5.57 3h-5.57m5.57 3h-5.57m5.57 6h-5.57m5.57 3h-5.57m5.59 3h-5.57M21.204 21h-5.571m5.571 6h-5.571m5.571 3h-5.571m5.571-12h-5.571m2.787-3H4.49m13.93 18H4.49"></svg:path>`,
})
export class ArcticonsBooruhubIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
