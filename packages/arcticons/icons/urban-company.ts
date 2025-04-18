import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsUrbanCompanyIcon],svg[arcticons-urban-company-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.5 26.307v.058a4.64 4.64 0 0 1-4.642 4.642h0a4.64 4.64 0 0 1-4.641-4.642v-4.73a4.64 4.64 0 0 1 4.641-4.641h0a4.64 4.64 0 0 1 4.642 4.642v.057m-23-4.699v9.37a4.642 4.642 0 1 0 9.283 0v-9.37"></svg:path>`,
})
export class ArcticonsUrbanCompanyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
