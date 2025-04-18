import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBaseStationIcon],svg[tdesign-base-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.344 3.93l-.707.707a9 9 0 0 0 0 12.728l.707.707l-1.414 1.414l-.707-.707c-4.296-4.296-4.296-11.26 0-15.557l.707-.707zM19.07 2.515l.708.707c4.295 4.296 4.295 11.261 0 15.557l-.707.707l-1.415-1.414l.707-.707a9 9 0 0 0 0-12.728l-.707-.707zM9.526 7.111l-.707.707a4.5 4.5 0 0 0 0 6.364l.707.707l-1.414 1.415l-.708-.707a6.5 6.5 0 0 1 0-9.193l.708-.707zm6.363-1.414l.707.707a6.5 6.5 0 0 1 0 9.193l-.707.707l-1.414-1.415l.707-.707a4.5 4.5 0 0 0 0-6.364l-.707-.707zM10 11a2 2 0 1 1 3 1.732V23h-2V12.732A2 2 0 0 1 10 11"></svg:path>`,
})
export class TdesignBaseStationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
