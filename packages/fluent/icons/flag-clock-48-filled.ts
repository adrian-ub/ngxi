import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFlagClock48FilledIcon],svg[fluent-flag-clock-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.75 6c-.69 0-1.25.56-1.25 1.25v35.5a1.25 1.25 0 1 0 2.5 0V33h12.153C23.115 26.77 28.5 22 35 22q.326 0 .65.016L33.8 19.5l8.456-11.51A1.25 1.25 0 0 0 41.25 6zM46 35c0 6.075-4.925 11-11 11s-11-4.925-11-11s4.925-11 11-11s11 4.925 11 11m-5 0a1 1 0 0 0-1-1h-4v-6a1 1 0 1 0-2 0v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1"></svg:path>`,
})
export class FluentFlagClock48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
