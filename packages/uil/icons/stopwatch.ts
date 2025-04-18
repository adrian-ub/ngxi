import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilStopwatchIcon],svg[uil-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.3 8.59l.91-.9a1 1 0 0 0-1.42-1.42l-.9.91a8 8 0 0 0-9.79 0l-.91-.92a1 1 0 0 0-1.42 1.43l.92.91A7.92 7.92 0 0 0 4 13.5a8 8 0 1 0 14.3-4.91M12 19.5a6 6 0 1 1 6-6a6 6 0 0 1-6 6m-2-15h4a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2m3 6a1 1 0 0 0-2 0v1.89a1.5 1.5 0 1 0 2 0Z"></svg:path>`,
})
export class UilStopwatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
