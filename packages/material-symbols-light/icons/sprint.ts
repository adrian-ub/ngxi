import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSprintIcon],svg[material-symbols-light-sprint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.42 19.289l-.708-.708L14.792 8.5H10.5v2h-1v-3h6.171q.093 0 .179.034q.087.035.15.099l3.096 3.09q.714.714 1.631 1.137t1.965.429v1q-1.261 0-2.341-.495t-1.94-1.348l-1.269-1.28l-3.104 3.084l2.154 2.154l-5.55 3.217l-.5-.898l4.396-2.532l-2.507-2.508zM4 12.5v-1h4v1zm-2-3v-1h4v1zm17.475-2q-.633 0-1.079-.443T17.95 5.98t.446-1.076t1.079-.444t1.079.444T21 5.98t-.446 1.076t-1.079.443M4 6.5v-1h4v1z"></svg:path>`,
})
export class MaterialSymbolsLightSprintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
