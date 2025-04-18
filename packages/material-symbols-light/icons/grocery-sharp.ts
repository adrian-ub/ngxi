import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightGrocerySharpIcon],svg[material-symbols-light-grocery-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.005 21q-2.082 0-3.543-1.457T11 16.005t1.457-3.543T15.996 11t3.543 1.457T21 15.996t-1.457 3.543T16.005 21M16 20q1.65 0 2.825-1.175T20 16t-1.175-2.825T16 12t-2.825 1.175T12 16t1.175 2.825T16 20M3 19v-8.896l2.458-5.488H3.962V3h7.077v1.616H9.542l2.497 5.646q-.206.115-.41.275t-.406.355L8.469 4.616H6.531L4 10.342V18h5.289q.067.275.173.528q.107.253.234.472zm13-9.385q-.646-.173-1.073-.696T14.5 7.692t.427-1.227T16 5.77zq.173-.646.696-1.073t1.227-.427t1.227.427t.696 1.073z"></svg:path>`,
})
export class MaterialSymbolsLightGrocerySharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
