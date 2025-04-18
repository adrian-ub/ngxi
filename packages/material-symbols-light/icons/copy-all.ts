import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCopyAllIcon],svg[material-symbols-light-copy-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17.423v-1.23h1.23v1.23zm0-3.577v-1.23h1.23v1.23zm0-3.577V9.04h1.23v1.23zM7.577 21v-1.23h1.23V21zm1.73-3.692q-.69 0-1.152-.463t-.463-1.153V4.615q0-.69.463-1.153T9.308 3h8.077q.69 0 1.153.462T19 4.615v11.077q0 .69-.462 1.153t-1.153.463zM11.155 21v-1.23h1.23V21zM5.23 21q-.508 0-.87-.362T4 19.77h1.23zm9.5 0v-1.23h1.23q0 .517-.361.873t-.87.357M4 6.692q0-.507.362-.869t.869-.361v1.23z"></svg:path>`,
})
export class MaterialSymbolsLightCopyAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
