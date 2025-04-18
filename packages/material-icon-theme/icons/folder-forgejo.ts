import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeFolderForgejoIcon],svg[material-icon-theme-folder-forgejo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#757575" d="m13.844 7.536l-1.288-1.072A2 2 0 0 0 11.276 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H15.124a2 2 0 0 1-1.28-.464"></svg:path><svg:g fill="none" transform="translate(14.53 10.455)scale(.08531)"><svg:path stroke="#FF6D00" stroke-width="25" d="M58 168V70a50 50 0 0 1 50-50h20" class="prefix__prefix__orange"></svg:path><svg:path stroke="#D50000" stroke-width="25" d="M58 168v-30a50 50 0 0 1 50-50h20" class="prefix__prefix__red"></svg:path><svg:circle cx="142" cy="20" r="18" stroke="#FF6D00" stroke-width="15" class="prefix__prefix__orange"></svg:circle><svg:circle cx="142" cy="88" r="18" stroke="#D50000" stroke-width="15" class="prefix__prefix__red"></svg:circle><svg:circle cx="58" cy="180" r="18" stroke="#D50000" stroke-width="15" class="prefix__prefix__red"></svg:circle></svg:g>`,
})
export class MaterialIconThemeFolderForgejoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
