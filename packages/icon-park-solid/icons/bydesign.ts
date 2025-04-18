import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidBydesignIcon],svg[icon-park-solid-bydesign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M8 7.282L19.556 4v12.718L8 20zm0 18.393l11.556-3.282v12.718L8 38.393zm16.889-4.599l11.555-2.854v22.924L24.89 44z"></svg:path>`,
})
export class IconParkSolidBydesignIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
