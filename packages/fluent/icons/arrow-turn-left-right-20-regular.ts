import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowTurnLeftRight20RegularIcon],svg[fluent-arrow-turn-left-right-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.996 14.566a.5.5 0 0 1-.31.4l-5 1.998a.5.5 0 0 1-.371-.928l3.837-1.535l-11.524-4.59c-.828-.329-.843-1.495-.024-1.847l11.7-5.023a.5.5 0 0 1 .394.919l-11.7 5.023l11.468 4.567l-1.913-3.826a.5.5 0 0 1 .894-.447l2.491 4.982a.5.5 0 0 1 .058.307"></svg:path>`,
})
export class FluentArrowTurnLeftRight20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
