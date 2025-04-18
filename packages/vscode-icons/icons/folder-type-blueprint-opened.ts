import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vscodeIconsFolderTypeBlueprintOpenedIcon],svg[vscode-icons-folder-type-blueprint-opened-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:radialgradient id="vscodeIconsFolderTypeBlueprintOpened0" cx="19.64" cy="19.72" r="15.24" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#138fce"></svg:stop><svg:stop offset=".857" stop-color="#385eaa"></svg:stop><svg:stop offset=".929" stop-color="#3265af"></svg:stop></svg:radialgradient></svg:defs><svg:path fill="#7b9ddb" d="M27.9 6h-9.7l-2 4H5v17h25V6Zm.1 18H7V12h21Zm.1-14h-7.8l1-2H28Z"></svg:path><svg:path fill="#7b9ddb" d="M25.9 14H.3l3.8 13h25.6z"></svg:path><svg:path fill="url(#vscodeIconsFolderTypeBlueprintOpened0)" d="M11 11h20v20H11z"></svg:path><svg:g fill="#fff" opacity=".23"><svg:path d="M13.679 11h.357v20h-.357zm2.857 0h.357v20h-.357zm2.857 0h.357v20h-.357zm2.857 0h.357v20h-.357zm2.857 0h.357v20h-.357zm2.857 0h.357v20h-.357z"></svg:path><svg:path d="M11 13.679h20v.357H11zm0 2.857h20v.357H11zm0 2.857h20v.357H11zm0 2.857h20v.357H11zm0 2.857h20v.357H11zm0 2.857h20v.357H11z"></svg:path></svg:g>`,
})
export class VscodeIconsFolderTypeBlueprintOpenedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
