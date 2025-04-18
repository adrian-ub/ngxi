import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTvGenRoundedIcon],svg[material-symbols-light-tv-gen-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.675 18l-.492 1.304q-.028.068-.097.113t-.154.044h-.073q-.097 0-.17-.074t-.073-.175V18q-.667 0-1.141-.475T3 16.386v-9.77q0-.666.475-1.14T4.615 5h14.77q.666 0 1.14.475T21 6.615v9.77q0 .667-.475 1.143q-.474.475-1.14.475v1.234q0 .094-.065.16q-.066.065-.16.065h-.094q-.081 0-.149-.041t-.094-.111L18.369 18z"></svg:path>`,
})
export class MaterialSymbolsLightTvGenRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
