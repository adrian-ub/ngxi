import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashArrowLeftLightIcon],svg[stash-arrow-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.354 6.646a.5.5 0 0 1 0 .708L7.207 11.5H18a.5.5 0 0 1 0 1H7.207l4.147 4.146a.5.5 0 0 1-.708.708l-5-5a.5.5 0 0 1 0-.708l5-5a.5.5 0 0 1 .708 0"></svg:path>`,
})
export class StashArrowLeftLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
