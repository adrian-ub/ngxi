import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCalendarAppsScriptOutlineSharpIcon],svg[material-symbols-light-calendar-apps-script-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.45 21.5q-.212 0-.356-.144t-.144-.357t.144-.356t.356-.143h4.402l-3.588-2.529q-.18-.123-.213-.314q-.032-.191.079-.37t.308-.21q.197-.033.374.077l3.632 2.523l-1.532-4.15q-.073-.183.025-.375q.097-.192.286-.265t.387.016t.279.295l1.488 4.112l1.154-4.225q.067-.189.232-.305q.164-.116.362-.05t.317.233t.052.353L20.821 21.5zM4 19V5h3.385V2.77h1.077V5h5.153V2.77h1V5H18v7.33q-.25-.016-.5-.016t-.5.017v-1.715H5V18h7.289q0 .25.017.5t.063.5zm1-9.385h12V6H5zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsLightCalendarAppsScriptOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
