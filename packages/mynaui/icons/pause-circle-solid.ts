import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiPauseCircleSolidIcon],svg[mynaui-pause-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75s9.75-4.365 9.75-9.75S17.385 2.25 12 2.25m-2 6a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75m4.75.75v6a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 1.5 0"></svg:path>`,
})
export class MynauiPauseCircleSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
