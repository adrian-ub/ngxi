import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDoorbellSharpIcon],svg[material-symbols-light-doorbell-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17.23q.376 0 .63-.239t.293-.606h-1.846q.039.367.293.606q.254.24.63.24m-3.692-1.347h7.384v-.768h-1v-2.273q0-1.064-.532-1.934q-.533-.87-1.525-1.14v-.961h-1.27v.961q-.992.27-1.524 1.14q-.533.87-.533 1.934v2.273h-1zM5 20V9.5l7-5.27l7 5.27V20z"></svg:path>`,
})
export class MaterialSymbolsLightDoorbellSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
