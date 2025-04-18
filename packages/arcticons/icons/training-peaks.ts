import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTrainingPeaksIcon],svg[arcticons-training-peaks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.664 14.679h12.35m-9.346 18.642l3.287-18.642m6.081 18.642l3.287-18.642h6.058a5.116 5.116 0 0 1 5.183 6.292a7.796 7.796 0 0 1-7.401 6.291h-6.059"></svg:path>`,
})
export class ArcticonsTrainingPeaksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
