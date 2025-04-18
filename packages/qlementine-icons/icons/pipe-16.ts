import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsPipe16Icon],svg[qlementine-icons-pipe-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 16a2.01 2.01 0 0 0 1.89-1.34c.318.213.701.338 1.11.338a2.01 2.01 0 0 0 1.89-1.34c.318.213.701.338 1.11.338a2.01 2.01 0 0 0 1.89-1.34c.318.213.701.338 1.11.338a2.01 2.01 0 0 0 1.89-1.34c.318.213.701.338 1.11.338c1.1 0 2-.895 2-2v-7a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v11c0 1.1.895 2 2 2zM15 3H1v3h2V4.5a.5.5 0 0 1 1 0V6h2V4.5a.5.5 0 0 1 1 0V6h2V4.5a.5.5 0 0 1 1 0V6h2V4.5a.5.5 0 0 1 1 0V6h2zm0 4h-2v3a1 1 0 0 0 2 0zm-3 0h-2v4a1 1 0 0 0 2 0zM9 7H7v5a1 1 0 0 0 2 0zM6 7H4v6a1 1 0 0 0 2 0zM3 7H1v7a1 1 0 0 0 2 0z" clip-rule="evenodd"></svg:path>`,
})
export class QlementineIconsPipe16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
