import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTuoiTreIcon],svg[arcticons-tuoi-tre-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.07 25.06L19.61 5.5v10.031h3.01v9.53h-3.01v7.022c.501.867 2.507.87 3.01 0v6.52c0 5.02-11.034 6.022-11.034-2.006V25.06zm19.31 0L38.92 5.5v10.031h3.01v9.53h-3.01v7.022c.501.867 2.507.87 3.01 0v6.52c0 5.02-11.035 6.022-11.035-2.006V25.06z"></svg:path>`,
})
export class ArcticonsTuoiTreIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
