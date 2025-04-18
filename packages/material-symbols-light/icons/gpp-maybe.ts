import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGppMaybeIcon],svg[material-symbols-light-gpp-maybe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15.23q.262 0 .439-.176q.176-.177.176-.438q0-.262-.177-.439T12 14t-.438.177t-.177.439t.177.438t.438.177m-.5-2.808h1V7.769h-1zm.5 8.539q-3.014-.895-5.007-3.651T5 11.1V5.692l7-2.615l7 2.615V11.1q0 3.454-1.993 6.21T12 20.963"></svg:path>`,
})
export class MaterialSymbolsLightGppMaybeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
