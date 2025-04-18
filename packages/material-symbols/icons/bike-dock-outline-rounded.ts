import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsBikeDockOutlineRoundedIcon],svg[material-symbols-bike-dock-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.95 21q-.425 0-.687-.325T3 19.925t.25-.737t.65-.438l3.35-.95L8.775 4.775q.1-.75.663-1.263T10.775 3H13.2q.775 0 1.338.513t.662 1.262L16.725 17.8l3.325.95q.425.125.688.425T21 19.9q0 .45-.288.775T20 21zM11 18h2V6q0-.425-.288-.712T12 5t-.712.288T11 6z"></svg:path>`,
})
export class MaterialSymbolsBikeDockOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
