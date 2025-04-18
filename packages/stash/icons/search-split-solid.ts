import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashSearchSplitSolidIcon],svg[stash-search-split-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.121 10.873l2.4 2.909c.24.29.719.29.959 0l2.399-2.91c.296-.359.014-.872-.48-.872h-4.798c-.494 0-.776.513-.48.873"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M7.482 3a7.482 7.482 0 1 0 4.49 13.468c.057.165.15.32.282.451l3.736 3.736a1.177 1.177 0 0 0 1.665-1.665l-3.736-3.736a1.2 1.2 0 0 0-.451-.282A7.482 7.482 0 0 0 7.482 3m-5.594 7.482a5.595 5.595 0 1 1 11.189 0a5.595 5.595 0 0 1-11.19 0" clip-rule="evenodd"></svg:path>`,
})
export class StashSearchSplitSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
