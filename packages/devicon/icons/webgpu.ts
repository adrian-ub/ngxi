import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconWebgpuIcon],svg[devicon-webgpu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#0086e8" d="m104.473 43.785l11.78 20.408l.085-.144l11.734-20.264z"></svg:path><svg:path fill="#0093ff" d="m116.254 23.568l-.084.145l-11.697 20.266h23.6z"></svg:path><svg:path fill="#0076cc" d="m69.623 63.904l23.402 40.528l.084-.145l23.315-40.383z"></svg:path><svg:path fill="#0066b0" d="m93.025 23.568l-.084.145l-23.318 40.383h46.8z"></svg:path><svg:path fill="#005a9c" d="m-.07 23.666l46.63 80.766l.085-.145l46.544-80.621z"></svg:path>`,
})
export class DeviconWebgpuIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
