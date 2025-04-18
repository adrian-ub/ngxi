import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsEditLocationAltIcon],svg[material-symbols-edit-location-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2q.675 0 1.338.113t1.287.312L9 8.075V13h4.925l5.625-5.625q.225.65.338 1.35T20 10.2q0 2.5-1.987 5.438T12 22m-1-11V8.9l6.2-6.2l2.1 2.1l-6.2 6.2zm9-6.9L17.9 2l.7-.7q.275-.275.7-.275t.7.275l.7.7q.275.275.275.7t-.275.7z"></svg:path>`,
})
export class MaterialSymbolsEditLocationAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
