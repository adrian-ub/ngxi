import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCreateNewFolderRoundedIcon],svg[material-symbols-light-create-new-folder-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.616 19q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.611 5H8.92q.333 0 .635.13q.302.132.519.349L11.596 7h7.789q.69 0 1.153.463T21 8.616v8.769q0 .69-.462 1.153T19.385 19zm9.884-5.5V15q0 .213.144.356t.357.144t.356-.144T15.5 15v-1.5H17q.213 0 .356-.144t.144-.357t-.144-.356T17 12.5h-1.5V11q0-.213-.144-.356t-.357-.144t-.356.144T14.5 11v1.5H13q-.213 0-.356.144t-.144.357t.144.356t.356.143z"></svg:path>`,
})
export class MaterialSymbolsLightCreateNewFolderRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
