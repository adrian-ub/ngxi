import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsPanelLeftIcon],svg[akar-icons-panel-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:rect width="20" height="18" x="2" y="3" stroke-linecap="round" stroke-linejoin="round" rx="2"></svg:rect><svg:path d="M9 3v18"></svg:path></svg:g>`,
})
export class AkarIconsPanelLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
