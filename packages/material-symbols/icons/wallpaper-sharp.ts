import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsWallpaperSharpIcon],svg[material-symbols-wallpaper-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21v-8h2v6h6v2zm10 0v-2h6v-6h2v8zm-7-4l3-4l2.25 3l3-4L18 17zm-3-6V3h8v2H5v6zm16 0V5h-6V3h8v8zm-3.5-1q-.65 0-1.075-.425T14 8.5t.425-1.075T15.5 7t1.075.425T17 8.5t-.425 1.075T15.5 10"></svg:path>`,
})
export class MaterialSymbolsWallpaperSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
