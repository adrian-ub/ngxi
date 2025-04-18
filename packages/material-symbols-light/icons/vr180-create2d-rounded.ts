import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightVr180Create2dRoundedIcon],svg[material-symbols-light-vr180-create2d-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 21q-.69 0-1.153-.462t-.462-1.153V12q0-.69.462-1.153T12 10.385h7.385q.69 0 1.153.462T21 12v7.385q0 .69-.462 1.152T19.385 21zm1.096-2.192h5.187q.17 0 .241-.14t-.033-.276l-1.391-1.81q-.073-.103-.208-.103q-.134 0-.207.104l-1.493 1.975l-.992-1.37q-.073-.103-.208-.103q-.134 0-.208.104l-.896 1.203q-.104.135-.03.275q.073.14.238.14M8 16.713q-2.252-.656-3.626-2.511T3 10q0-2.927 2.036-4.963T10 3q2.346 0 4.201 1.374T16.711 8H12q-1.65 0-2.825 1.175T8 12z"></svg:path>`,
})
export class MaterialSymbolsLightVr180Create2dRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
