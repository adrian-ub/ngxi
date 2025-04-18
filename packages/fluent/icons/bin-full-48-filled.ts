import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBinFull48FilledIcon],svg[fluent-bin-full-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34.807 4.583a1.25 1.25 0 0 1-.39 1.724L9.57 22h9.93v-2.75A2.25 2.25 0 0 1 21.75 17h7.75v-2.75A2.25 2.25 0 0 1 31.75 12h8A2.25 2.25 0 0 1 42 14.25v7.764a2.25 2.25 0 0 1 2 2.236v13.5A6.25 6.25 0 0 1 37.75 44h-27.5A6.25 6.25 0 0 1 4 37.75v-14.5c0-.429.22-.828.583-1.057l28.5-18a1.25 1.25 0 0 1 1.724.39M39.5 22v-7.5H32V22zm-10 0v-2.5H22V22z"></svg:path>`,
})
export class FluentBinFull48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
