import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciTimerAddIcon],svg[ci-timer-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 16v-3m0 0v-3m0 3H9m3 0h3m6-7l-2-2m-9-2h4m-2 19a8 8 0 1 1 0-16a8 8 0 0 1 0 16"></svg:path>`,
})
export class CiTimerAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
