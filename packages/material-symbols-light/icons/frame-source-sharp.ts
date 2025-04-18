import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFrameSourceSharpIcon],svg[material-symbols-light-frame-source-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.6 14.889L5.712 12L8.6 9.111l.689.714L7.114 12l2.175 2.175zm6.8 0l-.688-.714L16.887 12l-2.175-2.175l.688-.713L18.288 12zM4 20v-5h1v4h4v1zm11 0v-1h4v-4h1v5zM4 9V4h5v1H5v4zm15 0V5h-4V4h5v5z"></svg:path>`,
})
export class MaterialSymbolsLightFrameSourceSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
