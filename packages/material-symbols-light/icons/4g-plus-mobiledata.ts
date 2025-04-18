import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLight4gPlusMobiledataIcon],svg[material-symbols-light-4g-plus-mobiledata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.192 14.5v-2h-2v-1h2v-2h1v2h2v1h-2v2zm-14.384 2v-3h-4v-6h1v5h3v-5h1v5h1v1h-1v3zm10.769-5v3.385q0 .666-.475 1.14t-1.14.475h-3.77q-.666 0-1.14-.475t-.475-1.14v-5.77q0-.666.475-1.14t1.14-.475h3.924q.498 0 .902.27t.559.73h-5.385q-.269 0-.442.173t-.173.443v5.769q0 .269.173.442t.442.173h3.77q.269 0 .442-.173t.173-.442V12.5h-2v-1z"></svg:path>`,
})
export class MaterialSymbolsLight4gPlusMobiledataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
