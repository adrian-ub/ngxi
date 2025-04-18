import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashInfoCircleLightIcon],svg[stash-info-circle-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 0 0 0-17M2.5 12a9.5 9.5 0 1 1 19 0a9.5 9.5 0 0 1-19 0M12 7.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m-1.5.5a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m.945 3.102a1 1 0 0 1 1.555.832V16h1a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1h1v-4.066l-.723.482a.5.5 0 1 1-.554-.832z"></svg:path>`,
})
export class StashInfoCircleLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
