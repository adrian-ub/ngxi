import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsAffiliateIcon],svg[hugeicons-affiliate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21.964 4.506s.177-1.785-.255-2.216m0 0c-.433-.433-2.215-.253-2.215-.253m2.215.253L19 5m2.964 14.494s.177 1.785-.255 2.215m0 0c-.433.434-2.215.254-2.215.254m2.215-.254L19 19M2.29 2.29L5 5M2.29 2.29c.434-.433 2.216-.253 2.216-.253M2.29 2.29c-.43.431-.254 2.216-.254 2.216M2.29 21.71L5 19m-2.71 2.71c.434.433 2.216.253 2.216.253m-2.216-.254c-.43-.43-.254-2.215-.254-2.215M19 12a7 7 0 1 1-14 0a7 7 0 0 1 14 0"></svg:path><svg:path d="M11.914 9.301c-1.105 0-1.914.642-1.914 1.388s.522 1.21 2 1.21c1.628 0 2 .743 2 1.489c0 .745-.712 1.333-2.086 1.333m0-5.42c.87 0 1.331.305 1.695.716M11.914 9.3v-.844m0 6.264c-.87 0-1.21-.172-1.689-.606m1.689.606v.788"></svg:path></svg:g>`,
})
export class HugeiconsAffiliateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
