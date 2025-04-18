import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[qlementineIconsLeftToRight16Icon],svg[qlementine-icons-left-to-right-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.5 0a2.5 2.5 0 0 0 0 5H6v3.5a.5.5 0 0 0 1 0V1h2v7.5a.5.5 0 0 0 1 0V1h1.5a.5.5 0 0 0 0-1zM6 1H4.5a1.5 1.5 0 0 0 0 3H6z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M1 12.5a.5.5 0 0 1 .5-.5h12.8l-2.15-2.15a.5.5 0 0 1 .707-.707l3 3a.5.5 0 0 1 .146.35v.006a.5.5 0 0 1-.146.35l-3 3a.5.5 0 0 1-.707-.707l2.15-2.15H1.5a.5.5 0 0 1-.5-.5z"></svg:path>`,
})
export class QlementineIconsLeftToRight16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
