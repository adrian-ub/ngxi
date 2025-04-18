import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTvOptionsEditChannelsIcon],svg[material-symbols-light-tv-options-edit-channels-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 15.385v-1.327h1.366v1.327zm0-3.404v-1.327h1.366v1.327zm0-3.385V7.29h1.366v1.307zm3.75 6.616v-1h2.942v1zm0-3.385v-1h11.558v1zm0-3.385v-1h11.558v1zM15.662 19l-3.385-3.384l.714-.714l2.67 2.671l5.285-5.284l.708.719z"></svg:path>`,
})
export class MaterialSymbolsLightTvOptionsEditChannelsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
