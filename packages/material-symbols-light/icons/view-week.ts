import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewWeekIcon],svg[material-symbols-light-view-week-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.077 19q-.46 0-.768-.309Q3 18.383 3 17.923V6.077q0-.46.309-.768Q3.617 5 4.077 5h3.171q.44 0 .759.318t.318.759v11.846q0 .44-.318.759T7.248 19zm6.33 0q-.44 0-.758-.318t-.318-.759V6.077q0-.44.318-.759T10.408 5h3.19q.44 0 .759.318t.318.759v11.846q0 .44-.318.759t-.759.318zm6.345 0q-.44 0-.759-.318t-.318-.759V6.077q0-.44.318-.759T16.752 5h3.171q.46 0 .768.309q.309.308.309.768v11.846q0 .46-.309.768q-.308.309-.768.309z"></svg:path>`,
})
export class MaterialSymbolsLightViewWeekIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
