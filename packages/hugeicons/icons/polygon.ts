import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsPolygonIcon],svg[hugeicons-polygon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2 14.015v-4.03c0-1.226 0-1.84.228-2.39c.229-.552.662-.985 1.53-1.852l1.985-1.986c.867-.867 1.3-1.3 1.852-1.529C8.145 2 8.759 2 9.985 2h4.03c1.226 0 1.84 0 2.39.228c.552.229.985.662 1.852 1.53l1.986 1.985c.867.867 1.3 1.3 1.529 1.852c.228.55.228 1.164.228 2.39v4.03c0 1.226 0 1.84-.228 2.39c-.229.552-.662.985-1.53 1.852l-1.985 1.986c-.867.867-1.3 1.3-1.852 1.529c-.55.228-1.164.228-2.39.228h-4.03c-1.226 0-1.84 0-2.39-.228c-.552-.229-.985-.662-1.852-1.53l-1.986-1.985c-.867-.867-1.3-1.3-1.529-1.852C2 15.855 2 15.241 2 14.015" color="currentColor"></svg:path>`,
})
export class HugeiconsPolygonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
