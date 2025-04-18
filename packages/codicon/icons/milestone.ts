import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconMilestoneIcon],svg[codicon-milestone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1H7v2H1.5l-.5.5v4l.5.5H7v7h1V8h4.49l.34-.13l2.18-2v-.74l-2.18-2L12.5 3H8zm4.29 6H2V4h10.29l1.63 1.5zM5 5h5v1H5z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconMilestoneIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
