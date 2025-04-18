import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashDataBooleanIcon],svg[stash-data-boolean-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4 12.25a4 4 0 1 1 8 0a4 4 0 0 1-8 0m4-2.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="M12 12.25a4 4 0 1 1 8 0a4 4 0 0 1-8 0"></svg:path>`,
})
export class StashDataBooleanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
