import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riExpandVerticalLineIcon],svg[ri-expand-vertical-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 .5l4.95 4.95l-1.415 1.413l-2.536-2.535V10h-2V4.328L8.467 6.86L7.052 5.447zM11 14v5.67l-2.536-2.535L7.05 18.55L12 23.5l4.95-4.95l-1.414-1.414L13 19.672v-5.673z"></svg:path>`,
})
export class RiExpandVerticalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
