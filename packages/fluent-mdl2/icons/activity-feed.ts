import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMdl2ActivityFeedIcon],svg[fluent-mdl2-activity-feed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 1088V768H0V128h1664v640H448zm0-448h128v139l139-139h1141V256H128zm1920 384v640h-128v320l-320-320H384v-640zm-128 128H512v384h1141l139 139v-139h128z"></svg:path>`,
})
export class FluentMdl2ActivityFeedIcon {
  readonly viewBox = input("0 0 2048 2048")
  readonly width = input("1em")
  readonly height = input("1em")
}
