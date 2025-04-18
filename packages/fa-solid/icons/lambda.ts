import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidLambdaIcon],svg[fa-solid-lambda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M424 384h-43.5L197.6 48.68A32.018 32.018 0 0 0 169.5 32H24C10.75 32 0 42.74 0 56v48c0 13.25 10.75 24 24 24h107.5l4.63 8.49L3.25 446.55C-3.53 462.38 8.08 480 25.31 480h52.23c9.6 0 18.28-5.72 22.06-14.55l95.02-221.72L314.4 463.32A32.018 32.018 0 0 0 342.5 480H424c13.25 0 24-10.75 24-24v-48c0-13.26-10.75-24-24-24z" fill="currentColor"></svg:path>`,
})
export class FaSolidLambdaIcon {
  readonly viewBox = input("0 0 448 512")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
