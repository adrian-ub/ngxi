import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gridiconsStatsAlt2Icon],svg[gridicons-stats-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.143 15.857H5.57V9.43h2.572v6.428zm5.143 0h-2.572V3h2.572zm5.142 0h-2.571v-9h2.571z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M21 20.714H3v-2h18z" clip-rule="evenodd"></svg:path>`,
})
export class GridiconsStatsAlt2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
