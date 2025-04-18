import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsShapesSharpIcon],svg[famicons-shapes-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M363.27 336H4.73L184 16Z"></svg:path><svg:path fill="currentColor" d="M336 160a160.5 160.5 0 0 0-32.55 3.36l87.75 157L417.81 368H183.36C203.8 432.85 264.49 480 336 480c88.22 0 160-71.78 160-160s-71.78-160-160-160"></svg:path>`,
})
export class FamiconsShapesSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
