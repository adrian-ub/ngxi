import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsTrainlineIcon],svg[arcticons-trainline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="4.792" height="6.374" x="18.692" y="31.784" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.396" ry="2.396"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.484 31.784v6.374m4.776-3.978a2.396 2.396 0 0 1 2.396-2.396h0a2.396 2.396 0 0 1 2.396 2.396v3.978m-4.792-6.374v6.374M14.49 34.18a2.396 2.396 0 0 1 2.396-2.396h0m-2.397 0v6.374m-3.851-9.584v9.584m-1.673-6.374h3.347m13.56 0v6.374"></svg:path><svg:circle cx="25.872" cy="29.306" r=".75" fill="currentColor"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path>`,
})
export class ArcticonsTrainlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
