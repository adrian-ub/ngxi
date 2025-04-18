import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashArrowDownLargeLightIcon],svg[stash-arrow-down-large-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1.5a.5.5 0 0 1 .5.5v18.833l6.155-5.862a.5.5 0 1 1 .69.724l-7 6.667a.5.5 0 0 1-.69 0l-7-6.667a.5.5 0 1 1 .69-.724l6.155 5.862V2a.5.5 0 0 1 .5-.5"></svg:path>`,
})
export class StashArrowDownLargeLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
