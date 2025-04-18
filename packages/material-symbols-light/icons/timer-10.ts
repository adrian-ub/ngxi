import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightTimer10Icon],svg[material-symbols-light-timer-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.442 16.885h3.539q.269 0 .442-.174q.173-.172.173-.442V7.731q0-.27-.173-.442q-.173-.173-.442-.173h-3.539q-.269 0-.442.173t-.173.442v8.538q0 .27.173.443t.442.173m0 1.23q-.788 0-1.317-.528q-.529-.53-.529-1.318V7.731q0-.789.529-1.317q.529-.53 1.317-.53h3.539q.788 0 1.317.53q.529.528.529 1.317v8.538q0 .789-.529 1.318t-1.317.529zm-5.846 0v-11H5.192v-1.23h3.635v12.23z"></svg:path>`,
})
export class MaterialSymbolsLightTimer10Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
