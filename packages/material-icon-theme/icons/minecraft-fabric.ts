import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeMinecraftFabricIcon],svg[material-icon-theme-minecraft-fabric-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><svg:path fill="#38342a" d="M8 1v1H7v2H6v1H5v1H4v1H3v1H2v1H1v2h1v1h1v1h1v1h1v1h2v-1h1v-2h1v-1h1v-1h1V9h2V8h1V6h-1V5h-1V4h-1V3h-1V2H9V1z"></svg:path><svg:path fill="#dbd0b4" d="M8 2v1h1v1h1v1h1v1h1V5h-1V4h-1V3H9V2zM7 4v2H5v1H4v1H3v2h1v1h1v1h2v-2H6V9h2v1h1V8H8V7h2V6H9V5H8V4z"></svg:path><svg:path fill="#38342a" d="M8 4v1h1v1h1v1h1V6h-1V5H9V4z"></svg:path><svg:path fill="#bcb29c" d="M9 4v1h1V4zm1 1v1h1V5zm1 1v1h1V6zm0 1h-1v1H9v2h1V9h1zm-2 3H7v2h1v-1h1zm-2 2H6v1h1z"></svg:path><svg:path fill="#807a6d" d="M12 7v1h1V7z"></svg:path><svg:path fill="#aea694" d="M2 9v1h1v1h1v1h1v1h1v-1H5v-1H4v-1H3V9z"></svg:path><svg:path fill="#9a927e" d="M2 10v1h1v-1zm1 1v1h1v-1zm1 1v1h1v-1zm1 1v1h1v-1z"></svg:path><svg:path fill="#c6bca5" d="M8 3v1h1V3zM6 5v1h1V5zm1 1v1h1V6zm1 1v1h2V7zM5 8v1h1V8zm1 1v1h2V9z"></svg:path></svg:g>`,
})
export class MaterialIconThemeMinecraftFabricIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
