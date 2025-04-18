import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[cilWallpaperIcon],svg[cil-wallpaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M344 112h40v40h-40zM72 72h152V40H40v184h32z"></svg:path><svg:path fill="currentColor" d="M288 40v32h152v152h32V40zM72 288H40v184h184v-32H72z"></svg:path><svg:path fill="currentColor" d="m280.5 308.873l-91-91l-85.5 85.5v45.254l85.5-85.499L334.372 408h45.255l-76.5-76.5l72.104-72.104L440 324.165V440H288v32h184V312l-96.769-97.857z"></svg:path>`,
})
export class CilWallpaperIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
