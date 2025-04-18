import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerClockHour10FilledIcon],svg[tabler-clock-hour-10-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34m-5.401 9.576l.052.021l.08.026l.08.019l.072.011L12 13l.076-.003l.135-.02l.082-.02l.103-.039l.073-.035l.078-.046l.06-.042l.08-.069l.083-.088l.062-.083l.053-.09l.031-.064l.032-.081l.03-.109l.015-.094L13 12V7a1 1 0 0 0-2 0v3.131l-1.445-.963a1 1 0 0 0-1.317.184l-.07.093a1 1 0 0 0 .277 1.387l3.038 2.024z"></svg:path>`,
})
export class TablerClockHour10FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
