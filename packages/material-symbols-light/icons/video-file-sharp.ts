import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVideoFileSharpIcon],svg[material-symbols-light-video-file-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21V3h9.5L19 7.5V21zm9-13h4l-4-4zm-5.5 9.616h5.23v-2.077l1.847.973v-3.024l-1.846.974v-2.077H8.5z"></svg:path>`,
})
export class MaterialSymbolsLightVideoFileSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
