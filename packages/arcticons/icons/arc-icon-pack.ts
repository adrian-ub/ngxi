import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsArcIconPackIcon],svg[arcticons-arc-icon-pack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="24" r="15.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m24 31.93l7.209-11.535H16.791zm12.465-17.136h-24.93m26.783 3.265L24.937 39.471m-1.874 0L9.682 18.059m7.109 2.336l-6.352-3.893m27.122 0l-6.352 3.893M24 39.5v-7.57m-3.611-17.134l-1.674-5.371m8.933 5.371l1.673-5.371M18.036 31.473l-3.883 4.428m.002-10.597l-5.362 1.35m21.156 4.819l3.867 4.41m.014-10.579l5.362 1.35"></svg:path><svg:circle cx="24" cy="24" r="21.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsArcIconPackIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
