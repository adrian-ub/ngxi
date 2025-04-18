import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBlenderSharpIcon],svg[material-symbols-blender-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 22v-4.75l1.85-2.1L7.225 11H3V3h7V2h4v1h3.975L16.15 15.15l1.85 2.1V22zm.925-13l-.6-4H5v4zM12 19q.425 0 .713-.288T13 18t-.288-.712T12 17t-.712.288T11 18t.288.713T12 19m-2.3-5h4.6l1.35-9h-7.3z"></svg:path>`,
})
export class MaterialSymbolsBlenderSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
