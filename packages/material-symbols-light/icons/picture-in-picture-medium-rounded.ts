import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightPictureInPictureMediumRoundedIcon],svg[material-symbols-light-picture-in-picture-medium-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.73 15.616q-.342 0-.575-.233t-.232-.575V8.73q0-.343.232-.576t.576-.232h8.077q.343 0 .575.232t.233.576v6.077q0 .343-.233.575t-.575.233zM3.5 19q-.213 0-.356-.144T3 18.499t.144-.356T3.5 18h15.885q.23 0 .423-.192t.192-.424V5.5q0-.213.144-.356T20.501 5t.356.144T21 5.5v11.885q0 .69-.462 1.153T19.385 19z"></svg:path>`,
})
export class MaterialSymbolsLightPictureInPictureMediumRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
