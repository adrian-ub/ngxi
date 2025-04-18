import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsArrowUpRight16Icon],svg[qlementine-icons-arrow-up-right-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 3a.5.5 0 0 0 0 1h5.79l-8.15 8.15a.5.5 0 0 0 .707.707l8.15-8.15v5.79a.5.5 0 0 0 1 0v-7a.5.5 0 0 0-.5-.5h-7z"></svg:path>`,
})
export class QlementineIconsArrowUpRight16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
