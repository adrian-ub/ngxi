import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsOpenSourceIcon],svg[proicons-open-source-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.157 20.136c.211.51.8.757 1.284.492a9.25 9.25 0 1 0-8.882 0c.484.265 1.073.018 1.284-.492l1.358-3.28c.212-.51-.043-1.086-.478-1.426a3.7 3.7 0 1 1 4.554 0c-.435.34-.69.916-.478 1.426z"></svg:path>`,
})
export class ProiconsOpenSourceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
