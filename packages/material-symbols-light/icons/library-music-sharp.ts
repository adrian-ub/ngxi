import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLibraryMusicSharpIcon],svg[material-symbols-light-library-music-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.191 14.692q.84 0 1.42-.58t.581-1.42v-5.73h2.731V5.423h-3.5v5.808q-.248-.27-.556-.404q-.307-.135-.675-.135q-.84 0-1.42.58t-.58 1.42t.58 1.42t1.42.58M6.5 17V3h14v14zm-3 3V6.616h1V19h12.385v1z"></svg:path>`,
})
export class MaterialSymbolsLightLibraryMusicSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
