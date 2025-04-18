import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCalendarXBoldIcon],svg[ph-calendar-x-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160.49 136.49L145 152l15.52 15.51a12 12 0 0 1-17 17L128 169l-15.51 15.52a12 12 0 0 1-17-17L111 152l-15.49-15.51a12 12 0 1 1 17-17L128 135l15.51-15.52a12 12 0 1 1 17 17ZM228 48v160a20 20 0 0 1-20 20H48a20 20 0 0 1-20-20V48a20 20 0 0 1 20-20h20v-4a12 12 0 0 1 24 0v4h72v-4a12 12 0 0 1 24 0v4h20a20 20 0 0 1 20 20M52 52v24h152V52h-16a12 12 0 0 1-24 0H92a12 12 0 0 1-24 0Zm152 152V100H52v104Z"></svg:path>`,
})
export class PhCalendarXBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
