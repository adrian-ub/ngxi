import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHovRoundedIcon],svg[material-symbols-light-hov-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20.146q-.212 0-.388-.103q-.178-.102-.308-.314l-3.871-6.954q-.112-.192-.158-.385q-.046-.192-.046-.41t.046-.4t.158-.374l3.87-6.935q.132-.212.309-.314T12 3.854t.389.103q.177.102.307.314l3.871 6.935q.112.192.158.375t.046.4t-.046.41t-.158.384l-3.87 6.954q-.131.212-.308.314t-.389.103"></svg:path>`,
})
export class MaterialSymbolsLightHovRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
