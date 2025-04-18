import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7ResizeVIcon],svg[f7-resize-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M30.2 9.828v36.344l3.757-3.758a2 2 0 0 1 2.828 2.829l-7.07 7.07l-.052.05a2 2 0 0 1-1.464.637c-.493 0-.944-.178-1.293-.474a2 2 0 0 1-.25-.212l-7.07-7.071a2 2 0 1 1 2.828-2.829L26.2 46.2V9.801l-3.785 3.785a2 2 0 1 1-2.828-2.829l7.07-7.07q.12-.12.25-.213c.349-.296.8-.474 1.293-.474c.578 0 1.099.245 1.464.637l.051.05l7.071 7.07a2 2 0 1 1-2.828 2.829z"></svg:path>`,
})
export class F7ResizeVIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
