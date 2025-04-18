import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarNotebookMinimalisticBoldDuotoneIcon],svg[solar-notebook-minimalistic-bold-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2 16.144V4.998c0-1.098.886-1.99 1.982-1.923c.977.06 2.131.179 3.018.413c1.05.276 2.296.866 3.282 1.388A3.5 3.5 0 0 0 12 5.275v15.2a3.46 3.46 0 0 1-1.628-.406c-1-.532-2.29-1.15-3.372-1.435c-.877-.232-2.016-.35-2.985-.411C2.906 18.153 2 17.255 2 16.143" clip-rule="evenodd" opacity=".5"></svg:path><svg:path fill="currentColor" d="M22 16.144V4.934c0-1.073-.846-1.953-1.918-1.916c-1.129.04-2.535.156-3.582.47c-.908.271-1.965.816-2.826 1.315A3.5 3.5 0 0 1 12 5.275v15.2c.56 0 1.121-.136 1.628-.406c1-.532 2.29-1.15 3.372-1.435c.877-.232 2.016-.35 2.985-.411c1.109-.07 2.015-.968 2.015-2.08"></svg:path>`,
})
export class SolarNotebookMinimalisticBoldDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
