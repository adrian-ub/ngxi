import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBuildings2LineDuotoneIcon],svg[solar-buildings-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M22 22H2"></svg:path><svg:path d="M17 22V6c0-1.886 0-2.828-.586-3.414S14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586S7 4.114 7 6v16"></svg:path><svg:path d="M21 22V11.5c0-1.405 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C19.607 8 18.904 8 17.5 8M3 22V11.5c0-1.405 0-2.107.337-2.611a2 2 0 0 1 .552-.552C4.393 8 5.096 8 6.5 8" opacity=".5"></svg:path><svg:path stroke-linecap="round" d="M12 22v-3"></svg:path><svg:path stroke-linecap="round" d="M10 5h4m-4 3h4m-4 3h4m-4 3h4" opacity=".5"></svg:path></svg:g>`,
})
export class SolarBuildings2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
