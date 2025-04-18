import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[circleFlagsPt30Icon],svg[circle-flags-pt-30-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="circleFlagsPt300"><svg:circle cx="256" cy="256" r="256" fill="#fff"></svg:circle></svg:mask><svg:g mask="url(#circleFlagsPt300)"><svg:path fill="#0052b4" d="M0 0h144.7l108.4 41.2L367.3 0H512v512H367.3l-110.2-41.4L144.7 512H0z"></svg:path><svg:path fill="#ffda44" d="M144.7 0h222.6v512H144.7z"></svg:path><svg:path fill="#d80027" d="m328.4 278.3l16.7 22.2v-89l-16.7 22.2h-50v-50l22.2-16.7h-89l22.2 16.7v50h-50l-16.7-22.2v89l16.7-22.2h50v50L211.6 345h89l-22.2-16.7v-50z"></svg:path><svg:path fill="#eee" d="M323 244.9h-56v-55.7h-22V245h-55.7v22H245v55.7h22V267h55.7z"></svg:path></svg:g>`,
})
export class CircleFlagsPt30Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
