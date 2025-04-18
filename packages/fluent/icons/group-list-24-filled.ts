import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGroupList24FilledIcon],svg[fluent-group-list-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.001 11.996l3 .004a1 1 0 0 1 .114 1.993L6 14l-2-.004v5.003L6 19a1 1 0 0 1 .993.883L7 20a1 1 0 0 1-.883.993L6 21H3a1 1 0 0 1-.993-.883L2 20v-7.004a1 1 0 0 1 .885-.994zM21 17a1 1 0 0 1 .117 1.993L21 19H9a1 1 0 0 1-.117-1.993L9 17zm0-3a1 1 0 0 1 .117 1.993L21 16H9a1 1 0 0 1-.117-1.993L9 14zM6 2a1 1 0 0 1 .117 1.993L6 4H4v4.995h2a1 1 0 0 1 .993.883L7 9.995a1 1 0 0 1-.883.993L6 10.995H3a1 1 0 0 1-.993-.883L2 9.995V3a1 1 0 0 1 .883-.993L3 2zm15 5a1 1 0 0 1 .117 1.993L21 9H9a1 1 0 0 1-.117-1.993L9 7zm0-3a1 1 0 0 1 .117 1.993L21 6H9a1 1 0 0 1-.117-1.993L9 4z"></svg:path>`,
})
export class FluentGroupList24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
