import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightNfcSharpIcon],svg[material-symbols-light-nfc-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 16h8V8h-3.5q-.421 0-.71.29q-.29.289-.29.71v2.07q-.23.12-.404.344q-.173.223-.173.586q0 .46.299.768q.3.309.778.309q.421 0 .749-.309t.328-.768q0-.363-.179-.586q-.179-.224-.398-.345V9H15v6H9V9h1V8H8zm-4 4V4h16v16z"></svg:path>`,
})
export class MaterialSymbolsLightNfcSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
