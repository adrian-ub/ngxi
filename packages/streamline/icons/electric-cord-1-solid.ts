import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineElectricCord1SolidIcon],svg[streamline-electric-cord-1-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M5.25.813a.75.75 0 0 0-1.5 0V3.53H3a1 1 0 0 0-1 1v3a3 3 0 0 0 3 3h1.25v2.688a.75.75 0 0 0 1.5 0V10.53H9a3 3 0 0 0 3-3v-3a1 1 0 0 0-1-1h-.75V.812a.75.75 0 0 0-1.5 0v2.72h-3.5V.811Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineElectricCord1SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
