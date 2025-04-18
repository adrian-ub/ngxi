import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentChannelArrowLeft48FilledIcon],svg[fluent-channel-arrow-left-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.25 6a6.25 6.25 0 0 0-6.061 4.72A4 4 0 1 1 6 18.21v17.54A6.25 6.25 0 0 0 12.25 42h11.794A12.94 12.94 0 0 1 22 35c0-2.368.633-4.588 1.74-6.5h-6.49a1.25 1.25 0 1 1 0-2.5h8.37A12.96 12.96 0 0 1 35 22c2.577 0 4.98.75 7 2.044V12.25A6.25 6.25 0 0 0 35.75 6zM16 20.25c0-.69.56-1.25 1.25-1.25h13.5a1.25 1.25 0 1 1 0 2.5h-13.5c-.69 0-1.25-.56-1.25-1.25M7.5 12A2.496 2.496 0 0 0 5 14.5A2.496 2.496 0 0 0 7.5 17a2.5 2.5 0 0 0 0-5M46 35c0 6.075-4.925 11-11 11s-11-4.925-11-11s4.925-11 11-11s11 4.925 11 11m-12.293-5.707a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414-1.414L30.414 36H42a1 1 0 1 0 0-2H30.414l3.293-3.293a1 1 0 0 0 0-1.414"></svg:path>`,
})
export class FluentChannelArrowLeft48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
