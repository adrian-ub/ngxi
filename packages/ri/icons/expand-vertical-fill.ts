import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riExpandVerticalFillIcon],svg[ri-expand-vertical-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .5l4.95 4.95L13 5.447V10h-2V5.448l-3.948-.001zM11 14v4.55H7.05L12 23.5l4.95-4.95H13V14z"></svg:path>`,
})
export class RiExpandVerticalFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
