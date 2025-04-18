import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2CalendarDayIcon],svg[fluent-mdl2-calendar-day-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1664 128h384v1792H0V128h384V0h128v128h1024V0h128zm256 1664V640H128v1152zm0-1280V256h-256v128h-128V256H512v128H384V256H128v256zm-256 512v640H384v-640zm-128 512v-384H512v384zm128-768v128H384V768z"></svg:path>`,
})
export class FluentMdl2CalendarDayIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
