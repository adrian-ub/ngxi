import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vsSexMaleIcon],svg[vs-sex-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 512q-212 0-362 150T0 1024t150 362t362 150t362-150t150-362q0-140-71-260l327-327v395h256V0H704v257h394L772 583q-120-71-260-71m0 256q106 0 181 75t75 181t-75 181t-181 75t-181-75t-75-181t75-181t181-75"></svg:path>`,
})
export class VsSexMaleIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}
