import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashMoonIcon],svg[stash-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m11.177 3.037l-.062.006a9.001 9.001 0 1 0 8.219 14.175c.3-.42-.245-.913-.724-.72a7 7 0 0 1-.822.271a7 7 0 0 1-5.61-12.635C12.66 3.82 12.575 3 12 3a9 9 0 0 0-.823.037M9.053 5.101a8.5 8.5 0 0 0 6.698 13.395A7.5 7.5 0 1 1 9.053 5.101" clip-rule="evenodd"></svg:path>`,
})
export class StashMoonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
