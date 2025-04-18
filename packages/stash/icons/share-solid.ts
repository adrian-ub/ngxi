import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashShareSolidIcon],svg[stash-share-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 3.25a2.75 2.75 0 1 1-1.451 5.086a1 1 0 0 1-.089.052l-6.713 3.48a3 3 0 0 1 0 .264l.013.008l6.416 3.802a2.75 2.75 0 1 1-.912 1.784L8.42 13.968a2.75 2.75 0 1 1 .008-3.928l6.415-3.326A2.75 2.75 0 0 1 17.5 3.25"></svg:path>`,
})
export class StashShareSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
