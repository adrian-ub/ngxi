import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSkull1SolidIcon],svg[streamline-skull-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.25 10.235a6 6 0 1 0-8.5 0V13a1 1 0 1 0 2 0v-.916H6V13a1 1 0 1 0 2 0v-.916h1.25V13a1 1 0 1 0 2 0zm-6.5-1.651a1.25 1.25 0 1 0 0-2.5a1.25 1.25 0 0 0 0 2.5m5.75-1.25a1.25 1.25 0 1 1-2.5 0a1.25 1.25 0 0 1 2.5 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSkull1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
