import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiVisMapRegionIcon],svg[oui-vis-map-region-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 2.309v8.69a.5.5 0 0 1-.032.176L9.5 12.691V3.809zm-1-.04L2 3.825v8.906l3.527-1.568a.5.5 0 0 1-.027-.164zm.274-1.216a.5.5 0 0 1 .471.01l3.768 1.884l4.284-1.904A.5.5 0 0 1 15 1.5v10a.5.5 0 0 1-.297.457l-4.5 2a.5.5 0 0 1-.427-.01l-3.789-1.894l-4.283 1.904a.5.5 0 0 1-.703-.457v-10a.5.5 0 0 1 .297-.457zM10.5 3.825v8.906l3.5-1.556V2.27z"></svg:path>`,
})
export class OuiVisMapRegionIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
