import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconNatsIcon],svg[devicon-nats-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#34a574" d="M63.998 0h61.82v50.12h-61.82z"></svg:path><svg:path fill="#27aae1" d="M2.182 0h61.816v50.12H2.182Z"></svg:path><svg:path fill="#8dc63f" d="M63.998 50.164h61.82v50.113h-61.82z"></svg:path><svg:path fill="#375c93" d="M2.182 50.164h61.816v50.113H2.182Z"></svg:path><svg:path fill="#8dc63f" d="M54.914 100.004L85.16 128v-27.996z"></svg:path><svg:path fill="#375c93" d="m63.998 100.004l.322 8.812l-9.685-9.042z"></svg:path><svg:path fill="#fff" d="M89.608 64.802V23.315h14.779v53.651H81.993l-45.21-42.223v42.269H21.958V23.316h23.177l44.472 41.486z"></svg:path>`,
})
export class DeviconNatsIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
