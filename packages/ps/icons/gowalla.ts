import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psGowallaIcon],svg[ps-gowalla-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216 209q-1 9 0 47t-4 42q-60 7-83-59q-22-62 2-127q24-63 73-59q4 0 8 1q-12 53 24 66q28 12 51-11q13-13 14-32q1-31-26-50T219 4Q146-7 80.5 35T6 159q-8 81 19.5 120T126 353q-12 37-4 62t31.5 36t51 11.5T260 452t45-30q19-21 23.5-59t1.5-74.5t2-79.5zm-35 190q-24-16-10.5-41.5T208 329q7 0 8 4q5 59-35 66"></svg:path>`,
})
export class PsGowallaIcon {
  readonly viewBox = input("0 0 336 488")
  readonly width = input("0.69em")
  readonly height = input("1em")
}
