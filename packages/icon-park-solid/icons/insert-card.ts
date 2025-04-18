import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidInsertCardIcon],svg[icon-park-solid-insert-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M10 18H4V6h40v12h-6"></svg:path><svg:path fill="currentColor" d="M12 12L4 41h40l-8-29z"></svg:path></svg:g>`,
})
export class IconParkSolidInsertCardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
