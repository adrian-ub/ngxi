import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowsMergeDuotoneIcon],svg[ph-arrows-merge-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M184 40v64l-56 56l-56-56V40Z" opacity=".2"></svg:path><svg:path d="M192 40v64a8 8 0 0 1-2.34 5.66L136 163.31v49.38l18.34-18.35a8 8 0 0 1 11.32 11.32l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 0 1 11.32-11.32L120 212.69v-49.38l-53.66-53.65A8 8 0 0 1 64 104V40a8 8 0 0 1 16 0v60.69l48 48l48-48V40a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhArrowsMergeDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
