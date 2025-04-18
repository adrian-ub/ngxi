import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAmediatekaIcon],svg[arcticons-amediateka-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.91 12.867L4.5 39.465m18.405-28.76L8.406 39.466m19.5-30.932L12.312 39.466h6.677l1.983-3.924H34.84l1.985 3.924H43.5zm0 13.297l4.477 8.851h-8.954z"></svg:path>`,
})
export class ArcticonsAmediatekaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
