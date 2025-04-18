import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerBackgroundIcon],svg[tabler-background-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m4 8l4-4m6 0L4 14m0 6L20 4m0 6L10 20m10-4l-4 4"></svg:path>`,
})
export class TablerBackgroundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
