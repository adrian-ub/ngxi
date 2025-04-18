import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiArchiveRemoveOutlineIcon],svg[mdi-archive-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 13.09V10h2v3.09c-.33-.05-.66-.09-1-.09s-.67.04-1 .09M14.5 11h-5c-.28 0-.5.22-.5.5V13h6v-1.5c0-.28-.22-.5-.5-.5M6 19v-9H4v11h9.35c-.22-.63-.35-1.3-.35-2zM21 9H3V3h18zm-2-4H5v2h14zm3.54 11.88l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19z"></svg:path>`,
})
export class MdiArchiveRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
