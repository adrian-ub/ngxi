import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[stashSearchIcon],svg[stash-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.44 3a7.44 7.44 0 1 0 4.803 13.122c-.022.271.07.55.278.757l3.84 3.84a.96.96 0 1 0 1.358-1.358l-3.84-3.84a.96.96 0 0 0-.757-.278A7.44 7.44 0 0 0 10.44 3m-6 7.44a6 6 0 1 1 12 0a6 6 0 0 1-12 0"></svg:path>`,
})
export class StashSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
