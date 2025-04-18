import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCoraIcon],svg[arcticons-cora-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:ellipse cx="24" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="18.5" ry="15.5"></svg:ellipse><svg:ellipse cx="24" cy="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="18.5" ry="12"></svg:ellipse><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.867 19.939c1.624 0 2.941 1.372 2.941 3.065v1.992c0 1.692-1.317 3.065-2.94 3.065h0c-1.625 0-2.942-1.373-2.942-3.065v-1.992c0-1.693 1.317-3.065 2.941-3.065m5.879 3.065c0-1.693 1.317-3.065 2.941-3.065m-2.941 0v8.122m-11.757-1.544c-.507.922-1.46 1.544-2.554 1.544c-1.624 0-2.941-1.373-2.941-3.065v-1.992c0-1.693 1.317-3.065 2.941-3.065c1.091 0 2.043.619 2.551 1.538m23.515 3.519c0 1.693-1.307 3.065-2.919 3.065h-1.024c-1.068 0-1.934-.91-1.934-2.03S33.49 24 34.558 24h3.948"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.354 20.744c.709-.74 1.205-.804 2.574-.804c1.553 0 2.573.711 2.573 2.635v5.486"></svg:path>`,
})
export class ArcticonsCoraIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
