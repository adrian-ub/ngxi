import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTreeDiagramIcon],svg[icon-park-tree-diagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="10" cy="24" r="4" fill="#2F88FF"></svg:circle><svg:circle cx="38" cy="10" r="4" fill="#2F88FF"></svg:circle><svg:circle cx="38" cy="24" r="4" fill="#2F88FF"></svg:circle><svg:circle cx="38" cy="38" r="4" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M34 38L22 38V10H34"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14 24L34 24"></svg:path></svg:g>`,
})
export class IconParkTreeDiagramIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
