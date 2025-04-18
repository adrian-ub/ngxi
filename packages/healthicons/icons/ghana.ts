import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsGhanaIcon],svg[healthicons-ghana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M26 8a2 2 0 1 0-4 0v2.114a14 14 0 0 0-9.64 6.078A14 14 0 0 0 22 37.827V40a2 2 0 1 0 4 0v-2.173q.366-.052.731-.126A14 14 0 0 0 33.9 33.87a2 2 0 0 0-2.829-2.829A10 10 0 0 1 26 33.768V14.172a10 10 0 0 1 5.071 2.727a2 2 0 1 0 2.829-2.828a14 14 0 0 0-7.9-3.957zm-4 6.172a10 10 0 0 0-6.315 4.243A10 10 0 0 0 22 33.768z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsGhanaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
