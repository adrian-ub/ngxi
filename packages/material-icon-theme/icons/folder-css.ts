import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderCssIcon],svg[material-icon-theme-folder-css-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="materialIconThemeFolderCss0" fill="#d1c4e9" d="M14 20v-2h-2v8h2v-2h2v2a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm10 0v-2a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2c0 .839.357 2.34 2.746 2.966C21.438 23.15 22 23.612 22 24v2h-2v-2h-2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a3.345 3.345 0 0 0-2.746-2.967C20 20.703 20 20.193 20 20v-2h2v2Zm8 0v-2a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2c0 .839.357 2.34 2.746 2.966C29.438 23.15 30 23.612 30 24v2h-2v-2h-2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2a3.345 3.345 0 0 0-2.746-2.967C28 20.703 28 20.193 28 20v-2h2v2Z"></svg:path></svg:defs><svg:path fill="#7e57c2" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:use href="#materialIconThemeFolderCss0"></svg:use><svg:use href="#materialIconThemeFolderCss0"></svg:use>`,
})
export class MaterialIconThemeFolderCssIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
