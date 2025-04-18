import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightMountainFlagOutlineIcon],svg[material-symbols-light-mountain-flag-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.489 13.387l1.547 1.04L12 13.433l1.964.994l1.536-1.029l-1.02-2.052q-.076-.154-.23-.25T13.923 11h-3.888q-.173 0-.318.096q-.144.096-.22.25zM5.225 20H18.75l-2.812-5.687l-1.902 1.26L12 14.567l-2.036 1.006l-1.933-1.285zm-1.61 1l4.966-10.106q.211-.404.603-.649q.391-.245.85-.245H11.5V3h5.692l-.75 1.5l.75 1.5H12.5v4h1.385q.46 0 .838.242q.379.242.596.646L20.385 21z"></svg:path>`,
})
export class MaterialSymbolsLightMountainFlagOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
