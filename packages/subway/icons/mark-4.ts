import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayMark4Icon],svg[subway-mark-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M418.9 0H93.1C80.2 0 69.8 10.4 69.8 23.3V512L256 325.8L442.2 512V23.3c0-12.9-10.4-23.3-23.3-23.3m-46.5 186.2H139.6v-46.5h232.7v46.5z"></svg:path>`,
})
export class SubwayMark4Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
