import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayMark3Icon],svg[subway-mark-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M432.9 0H107.1C94.3 0 83.8 10.4 83.8 23.3V512L270 325.8L456.2 512V23.3c0-12.9-10.4-23.3-23.3-23.3m-46.5 186.2h-93.1v93.1h-46.5v-93.1h-93.1v-46.5h93.1V46.5h46.5v93.1h93.1z"></svg:path>`,
})
export class SubwayMark3Icon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
