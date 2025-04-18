import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons9PatchEditorIcon],svg[arcticons-9-patch-editor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="29" height="21" x="9.5" y="13.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="7" ry="7"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 20.636h37v7.568h-37z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.114 5.5h11.773v37H18.114z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M9.705 20.636h28.59v7.569H9.705z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.114 20.636h11.772v7.569H18.114z"></svg:path>`,
})
export class Arcticons9PatchEditorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
