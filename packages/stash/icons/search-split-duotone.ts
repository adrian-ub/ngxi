import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashSearchSplitDuotoneIcon],svg[stash-search-split-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.521 15.271a.96.96 0 0 1 1.358 0l3.84 3.84a.96.96 0 1 1-1.358 1.358l-3.84-3.84a.96.96 0 0 1 0-1.358" opacity=".5"></svg:path><svg:path fill="currentColor" d="M0 10.19a7.44 7.44 0 1 1 14.88 0a7.44 7.44 0 0 1-14.88 0m7.44-6a6 6 0 1 0 0 12a6 6 0 0 0 0-12m13.08 9.592l-2.399-2.91c-.296-.359-.014-.872.48-.872h4.798c.494 0 .776.513.48.873l-2.4 2.909a.637.637 0 0 1-.959 0"></svg:path>`,
})
export class StashSearchSplitDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
