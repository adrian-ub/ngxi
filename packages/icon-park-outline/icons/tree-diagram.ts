import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTreeDiagramIcon],svg[icon-park-outline-tree-diagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:circle cx="10" cy="24" r="4"></svg:circle><svg:circle cx="38" cy="10" r="4"></svg:circle><svg:circle cx="38" cy="24" r="4"></svg:circle><svg:circle cx="38" cy="38" r="4"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34 38H22V10h12M14 24h20"></svg:path></svg:g>`,
})
export class IconParkOutlineTreeDiagramIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
