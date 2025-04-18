import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconRectIcon],svg[devicon-rect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#292929" d="M0 0h128v128H0z"></svg:path><svg:path stroke="#fff" stroke-width="4.853" d="M5.762 5.762h116.476v116.476H5.762zm0 0"></svg:path><svg:path fill="#fff" d="M75.07 95.09H56.113v18.957H75.07v-3.79H59.906v-3.792h7.43v-3.793h-7.43v-3.79H75.07zm22.598 0H78.863v18.957h18.805v-3.79H82.504V98.884h15.164zm22.14 0h-18.195v3.793h7.582v15.164h3.79V98.883h6.824zm-86.593 0v18.957h3.789V98.883h11.375v7.582h3.793V95.09zm0 0"></svg:path><svg:path fill="#fff" d="M48.379 102.672H37.004v3.793h7.582v3.793h3.793zm3.793 7.586h-3.793v3.789h3.793zm0 0"></svg:path>`,
})
export class DeviconRectIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
