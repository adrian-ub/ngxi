import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashCircleDotLightIcon],svg[stash-circle-dot-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15.5a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7M9.5 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 0 0-5 0"></svg:path><svg:path fill="currentColor" d="M12 4.5a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15M5.5 12a6.5 6.5 0 1 1 13 0a6.5 6.5 0 0 1-13 0"></svg:path>`,
})
export class StashCircleDotLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
