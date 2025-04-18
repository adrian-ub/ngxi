import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riRewindStartMiniFillIcon],svg[ri-rewind-start-mini-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6a1 1 0 0 0-1 1v10a1 1 0 1 0 2 0V7a1 1 0 0 0-1-1m9.909 11.323a.5.5 0 0 0 .091-.288V6.965a.5.5 0 0 0-.788-.409l-7.133 5.035a.5.5 0 0 0 0 .817l7.133 5.035a.5.5 0 0 0 .697-.12m1.05-5.035a.5.5 0 0 0 .12.12l7.133 5.035a.5.5 0 0 0 .788-.408V6.965a.5.5 0 0 0-.788-.409l-7.133 5.035a.5.5 0 0 0-.12.697"></svg:path>`,
})
export class RiRewindStartMiniFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
