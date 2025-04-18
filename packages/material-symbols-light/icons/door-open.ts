import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDoorOpenIcon],svg[material-symbols-light-door-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.462 20v-1H6V5.116q0-.667.475-1.141t1.14-.475h8.77q.666 0 1.14.475T18 5.115V19h1.539v1zM15 19h2V5.116q0-.27-.173-.443t-.442-.173h-3.539v-.484q.927.103 1.54.796T15 6.427zm-4-6.23q.31 0 .54-.23t.23-.54t-.23-.54t-.54-.23t-.54.23t-.23.54t.23.54t.54.23"></svg:path>`,
})
export class MaterialSymbolsLightDoorOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
