import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riAlarmFillIcon],svg[ri-alarm-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22a9 9 0 1 1 0-18a9 9 0 0 1 0 18m1-9V8h-2v7h5v-2zM1.747 6.283l3.536-3.536l1.414 1.414L3.16 7.697zm16.97-3.536l3.536 3.536l-1.414 1.414l-3.536-3.536z"></svg:path>`,
})
export class RiAlarmFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
