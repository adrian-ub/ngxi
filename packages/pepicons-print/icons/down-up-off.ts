import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintDownUpOffIcon],svg[pepicons-print-down-up-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:g fill-rule="evenodd" clip-rule="evenodd" opacity=".2"><svg:path d="M11.44 9.56a1.5 1.5 0 0 1 0-2.12l3-3a1.5 1.5 0 0 1 2.12 2.12l-3 3a1.5 1.5 0 0 1-2.12 0"></svg:path><svg:path d="M19.56 9.56a1.5 1.5 0 0 1-2.12 0l-3-3a1.5 1.5 0 0 1 2.12-2.12l3 3a1.5 1.5 0 0 1 0 2.12"></svg:path><svg:path d="M15.5 6A1.5 1.5 0 0 1 17 7.5v8a1.5 1.5 0 0 1-3 0v-8A1.5 1.5 0 0 1 15.5 6m-3.94 7.44a1.5 1.5 0 0 1 0 2.12l-3 3a1.5 1.5 0 0 1-2.12-2.12l3-3a1.5 1.5 0 0 1 2.12 0"></svg:path><svg:path d="M3.44 13.44a1.5 1.5 0 0 1 2.12 0l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1 0-2.12"></svg:path><svg:path d="M7.5 17A1.5 1.5 0 0 1 6 15.5v-8a1.5 1.5 0 1 1 3 0v8A1.5 1.5 0 0 1 7.5 17"></svg:path></svg:g><svg:path fill-rule="evenodd" d="M10.646 7.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M17.354 7.354a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708l3 3a.5.5 0 0 1 0 .708" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M14 4a.5.5 0 0 1 .5.5V14a.5.5 0 0 1-1 0V4.5A.5.5 0 0 1 14 4m-4.646 8.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M2.646 12.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M6 16a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 1 0v9.5a.5.5 0 0 1-.5.5" clip-rule="evenodd"></svg:path><svg:path d="M1.15 1.878a.514.514 0 0 1 .728-.727l16.971 16.971a.514.514 0 0 1-.727.727z"></svg:path></svg:g>`,
})
export class PepiconsPrintDownUpOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
