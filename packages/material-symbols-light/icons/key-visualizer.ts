import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightKeyVisualizerIcon],svg[material-symbols-light-key-visualizer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v-1h2v1zm0-3.75v-1h6.673v1zm0-3.75v-1h16v1zm0-3.75v-1h6.673v1zM4 5V4h2v1zm4.673 15v-1h2v1zm0-15V4h2v1zm4.654 15v-1h2v1zm0-3.75v-1H20v1zm0-7.5v-1H20v1zm0-3.75V4h2v1zM18 20v-1h2v1zm0-15V4h2v1z"></svg:path>`,
})
export class MaterialSymbolsLightKeyVisualizerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
