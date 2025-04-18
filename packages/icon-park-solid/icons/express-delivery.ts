import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidExpressDeliveryIcon],svg[icon-park-solid-express-delivery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M8 31v11a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V31"></svg:path><svg:path fill="currentColor" d="M38 14H10a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2Z"></svg:path><svg:path stroke-linecap="round" d="M16 4v4m8-4v4m8-4v4M16 34h16"></svg:path></svg:g>`,
})
export class IconParkSolidExpressDeliveryIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
