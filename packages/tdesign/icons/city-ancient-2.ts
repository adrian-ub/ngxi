import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignCityAncient2Icon],svg[tdesign-city-ancient-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.999.802l6.053 3.993L17 6.39V9.5l3.334 2.5h1.667v2h-1v8h-18v-8h-1v-2h1.667L7 9.5V6.39L5.948 4.794zm-3 4.375V9h6V5.177l-3-1.98zM15.667 11H8.333L7 12h10zm3.335 3h-14v6H11v-3h2v3h6zm-8-9.002h2.004v2.004H11z"></svg:path>`,
})
export class TdesignCityAncient2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
