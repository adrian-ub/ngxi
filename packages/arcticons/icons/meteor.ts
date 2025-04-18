import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMeteorIcon],svg[arcticons-meteor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.543 27.472h-7.872a1.736 1.736 0 0 0 0 3.471h13.886a6.943 6.943 0 0 0 0-13.886H5.236a1.736 1.736 0 0 0 0 3.472h6.145"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.547 20.529H11.381a1.736 1.736 0 0 0 0 3.471h6.145m13.088 0H17.526a1.736 1.736 0 0 0 0 3.472h6.145"></svg:path><svg:circle cx="37.557" cy="24" r="3.739" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsMeteorIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
