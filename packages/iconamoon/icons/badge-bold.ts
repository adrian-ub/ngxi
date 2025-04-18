import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonBadgeBoldIcon],svg[iconamoon-badge-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round"><svg:path stroke-linecap="round" stroke-width="2.5" d="M12.586 4.586A2 2 0 0 0 11.172 4H4v7.172a2 2 0 0 0 .586 1.414l7 7a2 2 0 0 0 2.828 0l5.172-5.172a2 2 0 0 0 0-2.828z"></svg:path><svg:path stroke-width="3.75" d="M9 9h.01v.01H9z"></svg:path></svg:g>`,
})
export class IconamoonBadgeBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
