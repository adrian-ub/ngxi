import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidTopbuzzIcon],svg[icon-park-solid-topbuzz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="m18.905 18.168l-8.58-1.824a1.03 1.03 0 0 1-.794-1.224l1.931-9.087a1.03 1.03 0 0 1 1.225-.795l29.28 6.223c.558.119.914.667.796 1.225l-1.932 9.087a1.03 1.03 0 0 1-1.224.795l-8.506-1.808q-.581-.123-.69.385l-3.97 18.676a1.03 1.03 0 0 1-1.223.795l-9.088-1.931a1.03 1.03 0 0 1-.795-1.225l3.971-18.681q.107-.503-.4-.611Z"></svg:path>`,
})
export class IconParkSolidTopbuzzIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
