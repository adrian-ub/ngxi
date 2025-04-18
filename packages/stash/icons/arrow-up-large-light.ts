import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashArrowUpLargeLightIcon],svg[stash-arrow-up-large-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.655 1.638a.5.5 0 0 1 .69 0l7 6.667a.5.5 0 1 1-.69.724L12.5 3.167V22a.5.5 0 0 1-1 0V3.167L5.345 9.029a.5.5 0 0 1-.69-.724z"></svg:path>`,
})
export class StashArrowUpLargeLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
