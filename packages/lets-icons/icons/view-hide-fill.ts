import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsViewHideFillIcon],svg[lets-icons-view-hide-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-rule="evenodd" d="M18.237 15.116a19.5 19.5 0 0 0 1.951-2.05c.388-.472.582-.707.582-1.066s-.194-.594-.582-1.066C18.768 9.21 15.636 6 12 6c-.84 0-1.652.171-2.423.456l2.547 2.547a3 3 0 0 1 2.874 2.873zm-8.844-4.602a3 3 0 0 0 4.093 4.092l2.301 2.303C14.636 17.555 13.353 18 12 18c-3.636 0-6.768-3.21-8.188-4.934c-.388-.472-.582-.707-.582-1.066s.194-.594.582-1.066c.673-.817 1.732-1.97 3.046-2.954z" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-width="2" d="m5 2l16 16"></svg:path></svg:g>`,
})
export class LetsIconsViewHideFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
