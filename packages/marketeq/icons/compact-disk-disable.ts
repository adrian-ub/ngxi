import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqCompactDiskDisableIcon],svg[marketeq-compact-disk-disable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path><svg:path stroke="#344054" d="m8.333 8.333l33.334 33.334M25 20.833a4.166 4.166 0 1 0 0 8.333a4.166 4.166 0 0 0 0-8.333"></svg:path></svg:g>`,
})
export class MarketeqCompactDiskDisableIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
