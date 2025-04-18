import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightDryIcon],svg[material-symbols-light-dry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 21q-1.458 0-2.479-.906Q3 19.19 3 17.731v-4.939q0-.64.305-1.197t.84-.905l8.115-5.253l.115.115q.366.365.415.87t-.211.932l-1.702 2.838H18.5q.214 0 .357.144t.143.356t-.143.357t-.357.143H13v2.27h7.5q.214 0 .357.143t.143.357t-.143.356t-.357.144H13v2.269h6.5q.214 0 .357.143t.143.357t-.143.356t-.357.144H13V20h4.5q.214 0 .357.143T18 20.5t-.143.357T17.5 21zm9.11-12.692q.067-.852-.109-1.401t-.737-1.26q-.68-.847-.913-1.609q-.234-.761-.155-1.73h.996q-.084.91.125 1.47q.21.562.843 1.42q.573.779.792 1.497t.14 1.613zm3.39 0q.067-.852-.111-1.401q-.18-.55-.741-1.26q-.679-.847-.91-1.609t-.152-1.73h.991q-.085.91.125 1.47q.21.562.842 1.42q.573.779.792 1.497t.141 1.613z"></svg:path>`,
})
export class MaterialSymbolsLightDryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
