import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[vsSexFemaleIcon],svg[vs-sex-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 1664v-256h384v-256H640v-144q168-43 276-181t108-315q0-212-150-362T512 0T150 150T0 512q0 177 108 315t276 181v144H0v256h384v256zM512 256q106 0 181 75t75 181t-75 181t-181 75t-181-75t-75-181t75-181t181-75"></svg:path>`,
})
export class VsSexFemaleIcon {
  readonly viewBox = input("0 0 1024 1664")
  readonly width = input("0.62em")
  readonly height = input("1em")
}
