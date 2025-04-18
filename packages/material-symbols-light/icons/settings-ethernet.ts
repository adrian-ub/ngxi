import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSettingsEthernetIcon],svg[material-symbols-light-settings-ethernet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.308 17.308L15.6 16.6l4.589-4.6L15.6 7.4l.708-.708L21.616 12zm-8.616 0L2.385 12l5.307-5.308l.708.708L3.812 12L8.4 16.6zM8 12.769q-.328 0-.548-.221t-.22-.55t.221-.547t.55-.22t.547.221t.22.55t-.221.547t-.55.22m4 0q-.327 0-.547-.221t-.22-.55t.221-.547t.55-.22t.547.221t.22.55t-.221.547t-.55.22m4 0q-.327 0-.547-.221t-.22-.55t.221-.547t.55-.22t.547.221t.22.55t-.221.547t-.55.22"></svg:path>`,
})
export class MaterialSymbolsLightSettingsEthernetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
