import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopLockOpenCircleIcon],svg[pepicons-pop-lock-open-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M16 10h-6a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-4a4 4 0 0 0-4-4m-8 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2z" clip-rule="evenodd"></svg:path><svg:path d="M11 11a1 1 0 1 1-2 0V7a4 4 0 1 1 8 0v.5a1 1 0 1 1-2 0V7a2 2 0 1 0-4 0z"></svg:path><svg:path fill-rule="evenodd" d="M11 16a2 2 0 1 0 4 0a2 2 0 0 0-4 0m2.5 0a.5.5 0 1 1-1 0a.5.5 0 0 1 1 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopLockOpenCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
