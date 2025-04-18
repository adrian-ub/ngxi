import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[akarIconsShieldIcon],svg[akar-icons-shield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13.147 21.197l1.67-1.168a13.39 13.39 0 0 0 5.447-13.624a.84.84 0 0 0-.453-.586L12 2L4.19 5.819a.84.84 0 0 0-.454.586a13.39 13.39 0 0 0 5.448 13.624l1.67 1.168a2 2 0 0 0 2.293 0"></svg:path>`,
})
export class AkarIconsShieldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
