import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsGoLast16Icon],svg[qlementine-icons-go-last-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 8.5a.5.5 0 0 1 .5-.5h9.79L7.14 3.85a.5.5 0 0 1 .707-.707l5 5a.5.5 0 0 1 0 .707l-5 5a.5.5 0 0 1-.707-.707l4.15-4.15H1.5a.5.5 0 0 1-.5-.5zm14 4a.5.5 0 0 0 1 0v-8a.5.5 0 0 0-1 0z"></svg:path>`,
})
export class QlementineIconsGoLast16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
