import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignEditOffFilledIcon],svg[tdesign-edit-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.748 2.947a2 2 0 0 1 2.828 0l2.475 2.475a2 2 0 0 1 0 2.828l-4.553 4.553l-1.414-1.414l1.496-1.496l-2.475-2.475l-1.496 1.496L11.195 7.5zM4 2.586L21.414 20L20 21.414l-6.056-6.056l-4.786 4.785l-6.38 1.077l1.076-6.38l4.786-4.786L2.586 4zm6.054 8.883L5.72 15.803l-.502 2.977l2.977-.502l4.334-4.334z"></svg:path>`,
})
export class TdesignEditOffFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
