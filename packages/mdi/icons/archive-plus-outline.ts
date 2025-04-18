import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArchivePlusOutlineIcon],svg[mdi-archive-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 13.09V10h2v3.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09M9.5 11c-.28 0-.5.22-.5.5V13h6v-1.5c0-.28-.22-.5-.5-.5zM21 9H3V3h18zm-2-4H5v2h14zM6 19v-9H4v11h9.35c-.22-.63-.35-1.3-.35-2zm14-1v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class MdiArchivePlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
