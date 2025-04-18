import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqPauseIcon],svg[marketeq-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.583 6.25h4.167a2.083 2.083 0 0 1 2.083 2.083v33.334a2.083 2.083 0 0 1-2.083 2.083h-4.167a2.083 2.083 0 0 1-2.083-2.083V8.333a2.083 2.083 0 0 1 2.083-2.083m16.667 37.5h4.167a2.083 2.083 0 0 0 2.083-2.083V8.333a2.083 2.083 0 0 0-2.083-2.083H31.25a2.083 2.083 0 0 0-2.083 2.083v33.334a2.083 2.083 0 0 0 2.083 2.083"></svg:path>`,
})
export class MarketeqPauseIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
