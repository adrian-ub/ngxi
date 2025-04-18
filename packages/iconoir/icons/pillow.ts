import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirPillowIcon],svg[iconoir-pillow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m21.04 12.283l.599 4.19a2 2 0 0 1-2.179 2.273l-7.26-.726a2 2 0 0 0-.398 0l-7.261.726a2 2 0 0 1-2.179-2.273l.599-4.19a2 2 0 0 0 0-.566l-.599-4.19A2 2 0 0 1 4.54 5.254l7.261.726a2 2 0 0 0 .398 0l7.261-.726a2 2 0 0 1 2.179 2.273l-.599 4.19a2 2 0 0 0 0 .566M21 6l-4 3M7 15l-4 3"></svg:path>`,
})
export class IconoirPillowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
