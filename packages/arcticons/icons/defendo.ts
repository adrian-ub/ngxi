import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDefendoIcon],svg[arcticons-defendo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.24 43.49a9.66 9.66 0 0 1 2.41-11.93a9.5 9.5 0 0 1 12.09 0a9.66 9.66 0 0 1 2.4 11.93m-11.48-13.6v-7m6.07 7V6.68m0 18.32h2.51l1.55-1.57v-4.62"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m31.24 33.1l4.51-4.53V10.25M16.16 33.09l-3.82-3.79l-.08-14.72"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.28 21.24h2.66l1.86-1.86V9.75"></svg:path><svg:ellipse cx="16.8" cy="8.66" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.08" ry="1.09"></svg:ellipse><svg:ellipse cx="12.26" cy="13.48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.08" ry="1.09"></svg:ellipse><svg:ellipse cx="20.68" cy="21.79" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.08" ry="1.09"></svg:ellipse><svg:ellipse cx="26.73" cy="5.59" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.08" ry="1.09"></svg:ellipse><svg:ellipse cx="35.74" cy="9.15" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.08" ry="1.09"></svg:ellipse><svg:ellipse cx="30.78" cy="17.72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.08" ry="1.09"></svg:ellipse>`,
})
export class ArcticonsDefendoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
