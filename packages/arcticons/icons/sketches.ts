import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSketchesIcon],svg[arcticons-sketches-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.25 4.5v5.488h15.5V4.5m0 5.488l-1.468 16.148H17.719L16.25 9.988m11.833 16.148l-1.485 2.803h-5.195l-1.485-2.803m6.68 2.804v5.432h-5.195v-5.433m3.606 5.433v2H22.99v-2m1.01 2V43.5M22.45 9.988l.24 13.235m2.86-13.235l-.24 13.235M19.35 9.988l.722 13.235M28.65 9.988l-.722 13.235"></svg:path>`,
})
export class ArcticonsSketchesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
