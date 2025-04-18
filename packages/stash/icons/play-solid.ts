import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashPlaySolidIcon],svg[stash-play-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.01 5.887c-1.667-.972-3.76.23-3.76 2.16v7.906c0 1.93 2.093 3.132 3.76 2.16l6.777-3.954c1.653-.964 1.653-3.354 0-4.318z"></svg:path>`,
})
export class StashPlaySolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
