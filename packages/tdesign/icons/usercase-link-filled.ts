import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignUsercaseLinkFilledIcon],svg[tdesign-usercase-link-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 9c.921 0 1.893.232 2.676.754C9.467 10.28 10 11.074 10 12s-.533 1.719-1.324 2.246C7.893 14.768 6.921 15 6 15s-1.893-.232-2.676-.754C2.533 13.72 2 12.926 2 12s.533-1.719 1.324-2.246C4.107 9.232 5.079 9 6 9m12 0c.921 0 1.893.232 2.676.754C21.467 10.28 22 11.074 22 12s-.533 1.719-1.324 2.246c-.783.522-1.755.754-2.676.754s-1.893-.232-2.676-.754C14.533 13.72 14 12.926 14 12s.533-1.719 1.324-2.246C16.107 9.232 17.079 9 18 9m-7.002 1.996h2.004V13h-2.004z"></svg:path>`,
})
export class TdesignUsercaseLinkFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
