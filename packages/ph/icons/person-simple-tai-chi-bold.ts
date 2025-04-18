import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phPersonSimpleTaiChiBoldIcon],svg[ph-person-simple-tai-chi-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 84a36 36 0 1 0-36-36a36 36 0 0 0 36 36m0-48a12 12 0 1 1-12 12a12 12 0 0 1 12-12m100 72a12 12 0 0 1-12 12h-76v16.09L188.73 157a12 12 0 0 1 7.27 11v48a12 12 0 0 1-24 0v-40.09l-41.67-17.86L56 224.92a12 12 0 0 1-16-17.84l76-68.42V120H40a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12"></svg:path>`,
})
export class PhPersonSimpleTaiChiBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
