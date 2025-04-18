import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsRedo24Icon],svg[qlementine-icons-redo-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.1.854a.5.5 0 0 1 .707-.707l6 6a.5.5 0 0 1 0 .707l-6 6a.5.5 0 0 1-.707-.707l5.15-5.15H7.45a6.5 6.5 0 1 0 0 13h11a.5.5 0 0 1 0 1h-11c-4.14 0-7.5-3.36-7.5-7.5s3.36-7.5 7.5-7.5h14.8L17.1.847z"></svg:path>`,
})
export class QlementineIconsRedo24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
