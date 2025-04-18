import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileArrowLeftRightIcon],svg[mdi-file-arrow-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13c.34 0 .67.04 1 .09V8l-6-6H6c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h7.81c-.51-.88-.81-1.9-.81-3c0-3.31 2.69-6 6-6m-6-9.5L18.5 9H13zm7 16V18h-4v-2h4v-1.5l3 2.5zm-2 .5h4v2h-4v1.5L15 21l3-2.5z"></svg:path>`,
})
export class MdiFileArrowLeftRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
