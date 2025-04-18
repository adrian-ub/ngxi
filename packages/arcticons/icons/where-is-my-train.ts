import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWhereIsMyTrainIcon],svg[arcticons-where-is-my-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.325 12.919h19.349v7.854H14.325z"></svg:path><svg:circle cx="18.146" cy="28.176" r="2.528" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="29.889" cy="28.176" r="2.528" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M22.349 8.326h3.302M31.11 6.42h-1.686l-.318-.804a1.945 1.945 0 0 0-1.808-1.228h-6.596a1.945 1.945 0 0 0-1.808 1.228l-.318.803H16.89a6.763 6.763 0 0 0-6.764 6.763v16.19a5.936 5.936 0 0 0 5.936 5.936h15.874a5.936 5.936 0 0 0 5.936-5.936v-16.19a6.763 6.763 0 0 0-6.764-6.763M18.824 35.308l-7.177 8.08m22.028-2.934h-19.35m17.044-2.663H16.631m12.545-2.483l7.177 8.08"></svg:path>`,
})
export class ArcticonsWhereIsMyTrainIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
