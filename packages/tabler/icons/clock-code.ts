import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerClockCodeIcon],svg[tabler-clock-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M20.931 13.111a9 9 0 1 0-9.453 7.874M20 21l2-2l-2-2m-3 0l-2 2l2 2"></svg:path><svg:path d="M12 7v5l2 2"></svg:path></svg:g>`,
})
export class TablerClockCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
