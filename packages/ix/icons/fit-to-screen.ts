import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixFitToScreenIcon],svg[ix-fit-to-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469.334 85.333v341.333H42.667V85.333zM426.667 128H85.334v256h341.333zM283.582 294.248l30.17 30.17l-42.667 42.667L256 382.17l-57.751-57.752l30.17-30.17L256 321.813zm-138.667-96l30.17 30.17L147.52 256l27.565 27.581l-30.17 30.17L87.164 256l15.085-15.085zm222.17 0L424.837 256l-15.085 15.085l-42.667 42.666l-30.17-30.17L364.48 256l-27.565-27.582zM256 129.83l15.085 15.085l42.667 42.666l-30.17 30.17L256 190.186l-27.581 27.565l-30.17-30.17z"></svg:path>`,
})
export class IxFitToScreenIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
