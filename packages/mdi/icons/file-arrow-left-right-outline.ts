import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFileArrowLeftRightOutlineIcon],svg[mdi-file-arrow-left-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.09 20c.12.72.37 1.39.72 2H6c-1.11 0-2-.89-2-2V4a2 2 0 0 1 2-2h8l6 6v5.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09V9h-5V4H6v16zM23 17l-3-2.5V16h-4v2h4v1.5zm-5 1.5L15 21l3 2.5V22h4v-2h-4z"></svg:path>`,
})
export class MdiFileArrowLeftRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
