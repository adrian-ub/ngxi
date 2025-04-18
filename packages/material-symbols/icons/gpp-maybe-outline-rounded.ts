import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsGppMaybeOutlineRoundedIcon],svg[material-symbols-gpp-maybe-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16q.425 0 .713-.288T13 15t-.288-.712T12 14t-.712.288T11 15t.288.713T12 16m0-4q.425 0 .713-.288T13 11V8q0-.425-.288-.712T12 7t-.712.288T11 8v3q0 .425.288.713T12 12m0 9.9q-.175 0-.325-.025t-.3-.075Q8 20.675 6 17.637T4 11.1V6.375q0-.625.363-1.125t.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725T20 6.375V11.1q0 3.5-2 6.538T12.625 21.8q-.15.05-.3.075T12 21.9m0-2q2.6-.825 4.3-3.3t1.7-5.5V6.375l-6-2.25l-6 2.25V11.1q0 3.025 1.7 5.5t4.3 3.3m0-7.9"></svg:path>`,
})
export class MaterialSymbolsGppMaybeOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
