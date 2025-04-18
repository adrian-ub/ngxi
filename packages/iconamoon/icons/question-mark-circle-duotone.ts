import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconamoonQuestionMarkCircleDuotoneIcon],svg[iconamoon-question-mark-circle-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="12" r="9" fill="currentColor" opacity=".16"></svg:circle><svg:circle cx="12" cy="12" r="9" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></svg:circle><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="3" d="M12 16h.01v.01H12z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.586 7.586c.39-.39.9-.585 1.41-.586a2 2 0 0 1 1.418.586c.39.39.586.902.586 1.414s-.195 1.024-.586 1.414a2 2 0 0 1-1.418.586L12 12"></svg:path></svg:g>`,
})
export class IconamoonQuestionMarkCircleDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
