import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineLiftIcon],svg[streamline-lift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="m8.996 5.698l2.252-2.252L13.5 5.698M8.996 9.302l2.252 2.252L13.5 9.302M3.8 4.65a1.886 1.886 0 1 0 0-3.77a1.886 1.886 0 0 0 0 3.772Z"></svg:path><svg:path d="M7.101 7.952a3.3 3.3 0 0 0-6.601 0v1.414h1.415l.471 3.772h2.83l.47-3.772h1.415z"></svg:path></svg:g>`,
})
export class StreamlineLiftIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
