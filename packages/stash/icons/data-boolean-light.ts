import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashDataBooleanLightIcon],svg[stash-data-boolean-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.25 12.25a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0M8 9.5A2.75 2.75 0 1 0 8 15a2.75 2.75 0 0 0 0-5.5" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M16 8.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5"></svg:path>`,
})
export class StashDataBooleanLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
