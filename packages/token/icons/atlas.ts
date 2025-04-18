import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenAtlasIcon],svg[token-atlas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 8.657l-3.652 8.264c-.118.263-.185.479-.447.479H5.483c-.344 0-.534-.098-.36-.479l5.894-13.53c.118-.226.196-.391.463-.391h1.044c.262 0 .334.165.463.39l5.893 13.526c.17.386-.025.484-.37.484h-2.412c-.262 0-.334-.216-.447-.479l-3.652-8.27z"></svg:path><svg:path fill="currentColor" d="m12.005 21l-2.412-4.63h4.741z"></svg:path>`,
})
export class TokenAtlasIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
