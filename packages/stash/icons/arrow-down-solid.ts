import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashArrowDownSolidIcon],svg[stash-arrow-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.75c-.69 0-1.25.56-1.25 1.25v8.982l-2.866-2.866a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l5-5a1.25 1.25 0 0 0-1.768-1.768l-2.866 2.866V6c0-.69-.56-1.25-1.25-1.25"></svg:path>`,
})
export class StashArrowDownSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
