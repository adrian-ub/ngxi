import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArrowSplitVerticalIcon],svg[mdi-arrow-split-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 16v-3h-3v9h-2V2h2v9h3V8l4 4zM2 12l4 4v-3h3v9h2V2H9v9H6V8z"></svg:path>`,
})
export class MdiArrowSplitVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
