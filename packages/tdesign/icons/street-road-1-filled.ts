import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignStreetRoad1FilledIcon],svg[tdesign-street-road-1-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2v20H2V2zM7.784 18.177l2.393-11.962l-1.962-.392l-2.392 11.961zm10.393-.393l-2.393-11.96l-1.96.391l2.391 11.962zM13 10V7h-2v3zm0 4v-3h-2v3zm0 4v-3h-2v3z"></svg:path>`,
})
export class TdesignStreetRoad1FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
