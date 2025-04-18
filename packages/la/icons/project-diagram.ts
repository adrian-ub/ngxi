import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laProjectDiagramIcon],svg[la-project-diagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 6v8h5.635L12 19.908V27h8v-8h-6.217l-2.845-5H11v-3h10v3h8V6h-8v3H11V6zm2 2h4v4H5zm18 0h4v4h-4zm-8.582 13H18v4h-4v-3.762z"></svg:path>`,
})
export class LaProjectDiagramIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
