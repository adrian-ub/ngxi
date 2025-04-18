import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightViewAppsIcon],svg[material-symbols-light-view-apps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19V5l5.02.827v12.346zm7.404-.865V5.845h5.192v12.289zM22 19l-5.02-.827V5.827L22 5zM3 17.798l3.02-.479V6.662L3 6.177zm7.404-.663h3.192V6.846h-3.192zM21 17.823V6.177l-3.02.485v10.657zm-18-.025V6.177l3.02.485v10.657zm7.404-.663V6.846h3.192v10.289zM21 17.823l-3.02-.504V6.662L21 6.177z"></svg:path>`,
})
export class MaterialSymbolsLightViewAppsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
