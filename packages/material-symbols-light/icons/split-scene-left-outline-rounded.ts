import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSplitSceneLeftOutlineRoundedIcon],svg[material-symbols-light-split-scene-left-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.385 19q-.214 0-.357-.143q-.144-.143-.144-.357t.144-.357t.357-.143h4q.23 0 .423-.192t.192-.424V6.616q0-.231-.192-.424T19.385 6h-4q-.214 0-.357-.143q-.143-.144-.143-.357t.143-.357Q15.171 5 15.385 5h4q.69 0 1.153.463T21 6.616v10.769q0 .69-.462 1.153T19.385 19zM12 21q-.213 0-.357-.143T11.5 20.5V19H4.616q-.691 0-1.153-.462T3 17.384V6.616q0-.691.463-1.153T4.615 5H11.5V3.5q0-.213.143-.357T12 3t.357.143t.143.357v17q0 .214-.143.357T12 21m8-15v12z"></svg:path>`,
})
export class MaterialSymbolsLightSplitSceneLeftOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
