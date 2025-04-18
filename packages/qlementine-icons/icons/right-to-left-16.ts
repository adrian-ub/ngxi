import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsRightToLeft16Icon],svg[qlementine-icons-right-to-left-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.5 0a2.5 2.5 0 0 0 0 5H7v3.5a.5.5 0 0 0 1 0V1h2v7.5a.5.5 0 0 0 1 0V1h1.5a.5.5 0 0 0 0-1zM7 1H5.5a1.5 1.5 0 0 0 0 3H7z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M15 12.5a.5.5 0 0 0-.5-.5H1.7l2.15-2.15a.5.5 0 0 0-.707-.707l-3 3a.5.5 0 0 0-.147.353a.5.5 0 0 0 .147.353l3 3a.5.5 0 0 0 .707-.707l-2.15-2.15h12.8a.5.5 0 0 0 .5-.5z"></svg:path>`,
})
export class QlementineIconsRightToLeft16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
