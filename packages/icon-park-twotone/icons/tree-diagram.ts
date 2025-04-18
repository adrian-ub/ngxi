import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneTreeDiagramIcon],svg[icon-park-twotone-tree-diagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTTreeDiagram0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:circle cx="10" cy="24" r="4" fill="#555"></svg:circle><svg:circle cx="38" cy="10" r="4" fill="#555"></svg:circle><svg:circle cx="38" cy="24" r="4" fill="#555"></svg:circle><svg:circle cx="38" cy="38" r="4" fill="#555"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34 38H22V10h12M14 24h20"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTTreeDiagram0)"></svg:path>`,
})
export class IconParkTwotoneTreeDiagramIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
