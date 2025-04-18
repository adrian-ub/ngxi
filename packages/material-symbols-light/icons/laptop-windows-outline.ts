import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLaptopWindowsOutlineIcon],svg[material-symbols-light-laptop-windows-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 18.77v-1h3.616V17q-.691 0-1.153-.462T3 15.385v-8.77q0-.69.463-1.152T4.615 5h14.77q.69 0 1.152.463T21 6.615v8.77q0 .69-.463 1.153T19.385 17v.77H23v1zM4.616 16h14.769q.269 0 .442-.173t.173-.442v-8.77q0-.269-.173-.442T19.385 6H4.615q-.269 0-.442.173T4 6.615v8.77q0 .269.173.442t.443.173M4 16V6z"></svg:path>`,
})
export class MaterialSymbolsLightLaptopWindowsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
