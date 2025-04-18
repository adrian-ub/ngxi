import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMusicVideoSharpIcon],svg[material-symbols-light-music-video-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.866 16.558q.848 0 1.433-.586t.586-1.434V9H15.5V7.462h-3.384v5.5q-.249-.206-.568-.324t-.682-.119q-.849 0-1.434.586q-.586.586-.586 1.434t.586 1.433t1.434.586M3 19V5h18v14z"></svg:path>`,
})
export class MaterialSymbolsLightMusicVideoSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
