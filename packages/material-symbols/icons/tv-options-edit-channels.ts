import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsTvOptionsEditChannelsIcon],svg[material-symbols-tv-options-edit-channels-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16v-2h2v2zm0-4v-2h2v2zm0-4V6h2v2zm4 8v-2h4v2zm0-4v-2h13v2zm0-4V6h13v2zm9.95 12l-4.25-4.25l1.425-1.425l2.825 2.825l5.65-5.65l1.4 1.45z"></svg:path>`,
})
export class MaterialSymbolsTvOptionsEditChannelsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
