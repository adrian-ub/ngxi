import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignEditOffIcon],svg[tdesign-edit-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.748 2.947a2 2 0 0 1 2.829 0l2.474 2.475a2 2 0 0 1 0 2.829l-2.35 2.35l-2.202 2.202l-1.415-1.414l1.496-1.496l-2.475-2.474l-1.495 1.495L11.195 7.5l2.203-2.203zm-.228 3.057l2.474 2.475l1.643-1.643l-2.475-2.474zM4 2.586L21.414 20L20 21.414l-6.056-6.056l-4.786 4.786l-6.38 1.076l1.077-6.38l4.785-4.785L2.586 4zm6.055 8.883L5.72 15.803l-.503 2.977l2.977-.502l4.335-4.334z"></svg:path>`,
})
export class TdesignEditOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
