import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashDataBooleanDuotoneIcon],svg[stash-data-boolean-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.25 12.25a3.25 3.25 0 1 1-6.5 0a3.25 3.25 0 0 1 6.5 0" opacity=".5"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M8 8.25a4 4 0 1 0 4 4a4 4 0 1 0 8 0a4 4 0 0 0-8 0a4 4 0 0 0-4-4m-2.5 4a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0m8 0a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0" clip-rule="evenodd"></svg:path>`,
})
export class StashDataBooleanDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
