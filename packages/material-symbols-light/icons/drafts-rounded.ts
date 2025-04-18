import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDraftsRoundedIcon],svg[material-symbols-light-drafts-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.833 2.677l7.678 4.57q.22.159.354.393q.135.235.135.51v10.235q0 .69-.462 1.153T19.385 20H4.615q-.69 0-1.152-.462T3 18.384V8.15q0-.275.135-.51q.134-.234.354-.394l7.678-4.569q.38-.218.833-.218t.833.218m-.525 9.78L19.8 8l-7.492-4.458q-.154-.096-.308-.096t-.308.096L4.2 8l7.492 4.458q.154.096.308.096t.308-.096"></svg:path>`,
})
export class MaterialSymbolsLightDraftsRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
