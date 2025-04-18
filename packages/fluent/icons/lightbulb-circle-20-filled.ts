import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLightbulbCircle20FilledIcon],svg[fluent-lightbulb-circle-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16M6.5 8.5a3.5 3.5 0 1 1 5.587 2.81c-.183.136-.284.289-.31.43l-.05.26H8.273l-.05-.26c-.026-.141-.127-.294-.31-.43A3.5 3.5 0 0 1 6.5 8.5m2.182 5.684L8.46 13h3.08l-.222 1.184a1 1 0 0 1-.983.816h-.67a1 1 0 0 1-.983-.816"></svg:path>`,
})
export class FluentLightbulbCircle20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
