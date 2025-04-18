import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightWarningOutlineIcon],svg[material-symbols-light-warning-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.73 20L12 4l9.27 16zm1.72-1h15.1L12 6zM12 17.616q.262 0 .439-.177t.176-.439t-.177-.438t-.438-.178t-.438.177t-.177.439t.177.439t.438.177m-.5-2.231h1v-5h-1zM12 12.5"></svg:path>`,
})
export class MaterialSymbolsLightWarningOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
