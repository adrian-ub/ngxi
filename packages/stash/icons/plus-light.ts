import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashPlusLightIcon],svg[stash-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.5a.5.5 0 0 1 .5.5v5.5H18a.5.5 0 0 1 0 1h-5.5V18a.5.5 0 0 1-1 0v-5.5H6a.5.5 0 0 1 0-1h5.5V6a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class StashPlusLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
