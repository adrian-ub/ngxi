import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSettingsCellIcon],svg[material-symbols-light-settings-cell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 23.77q-.31 0-.54-.23T7.23 23t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23m4 0q-.31 0-.54-.23t-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23m4 0q-.31 0-.54-.23t-.23-.54t.23-.54t.54-.23t.54.23t.23.54t-.23.54t-.54.23M8.423 19q-.69 0-1.153-.462t-.462-1.153V2.615q0-.69.462-1.152T8.423 1h7.154q.69 0 1.153.463t.462 1.152v14.77q0 .69-.462 1.152T15.577 19zm-.615-3.5h8.384v-11H7.808z"></svg:path>`,
})
export class MaterialSymbolsLightSettingsCellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
