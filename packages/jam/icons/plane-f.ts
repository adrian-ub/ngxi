import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamPlaneFIcon],svg[jam-plane-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.685 13.285l-3.44 3.06l.528 2.423l-2.488 2.488l-2.507-3.921l-3.921-2.507l2.488-2.488L5.9 13l2.927-3.573l-6.171-4.114l2.828-2.829L13.2 5.057l3.793-3.793c1.171-1.172 2.985-1.258 4.05-.193s.978 2.878-.193 4.05l-3.793 3.793l2.571 7.713l-2.828 2.829z"></svg:path>`,
})
export class JamPlaneFIcon {
  readonly viewBox = input("-1 -1 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
