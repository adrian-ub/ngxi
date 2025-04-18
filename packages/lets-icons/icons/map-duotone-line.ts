import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsMapDuotoneLineIcon],svg[lets-icons-map-duotone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="letsIconsMapDuotoneLine0"><svg:g fill="none"><svg:path stroke="silver" stroke-opacity=".25" d="m18.5 21.5l-6-15m9-2l-19 4"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M2.5 5.7c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C4.02 2.5 4.58 2.5 5.7 2.5h12.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.428.218.988.218 2.108v12.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.428.218-.988.218-2.108.218H5.7c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C2.5 19.98 2.5 19.42 2.5 18.3z"></svg:path><svg:path stroke="#fff" d="M12.5 15.03c0 2.158-2.14 3.674-3.073 4.233a.83.83 0 0 1-.854 0C7.64 18.704 5.5 17.188 5.5 15.029C5.5 12.912 7.196 11.5 9 11.5c1.867 0 3.5 1.412 3.5 3.53Z"></svg:path><svg:circle cx="9" cy="15" r="1" fill="#fff"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h24v24H0z" mask="url(#letsIconsMapDuotoneLine0)"></svg:path>`,
})
export class LetsIconsMapDuotoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
