import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsScreenRotationAltIcon],svg[material-symbols-screen-rotation-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.175 21.4L3.75 13H6.6l7 7l5-5H16v-2h6v6h-2v-2.6l-5 5q-.575.575-1.412.575t-1.413-.575M2 11V5h2v2.6l5-5q.575-.575 1.413-.575t1.412.575L20.25 11H17.4l-7-7l-5 5H8v2z"></svg:path>`,
})
export class MaterialSymbolsScreenRotationAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
