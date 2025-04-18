import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatListNumberedIcon],svg[mdi-format-list-numbered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 13v-2h14v2zm0 6v-2h14v2zM7 7V5h14v2zM3 8V5H2V4h2v4zm-1 9v-1h3v4H2v-1h2v-.5H3v-1h1V17zm2.25-7a.75.75 0 0 1 .75.75c0 .2-.08.39-.21.52L3.12 13H5v1H2v-.92L4 11H2v-1z"></svg:path>`,
})
export class MdiFormatListNumberedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
