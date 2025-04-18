import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGameverbeteringIcon],svg[arcticons-gameverbetering-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.718 9.5v8.61l4.04 4.328l4.219-4.283V9.5zm18.437 10.752v7.94h-7.902l-4.42-4.037l3.93-3.903zm-14.397 5.89l4.174 4.105V38.5h-7.946v-8.253zm-5.743-6.069l3.772 4.082l-3.862 4.216h-8.08v-8.298z"></svg:path>`,
})
export class ArcticonsGameverbeteringIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
