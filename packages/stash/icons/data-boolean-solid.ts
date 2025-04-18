import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashDataBooleanSolidIcon],svg[stash-data-boolean-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.75 12.25A4.25 4.25 0 0 1 12 10.81a4.252 4.252 0 0 1 8.25 1.44A4.25 4.25 0 0 1 12 13.69a4.252 4.252 0 0 1-8.25-1.44M8 10a2.25 2.25 0 1 0 0 4.5A2.25 2.25 0 0 0 8 10" clip-rule="evenodd"></svg:path>`,
})
export class StashDataBooleanSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
