import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconOriginalBackbonejsIcon],svg[devicon-original-backbonejs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#002A41" d="M14.646 2.701v66.305l49.353 28.132V78.015l-33.017-18.82V29.633l33.017 18.821v-17.62L14.646 2.701z"></svg:path><svg:path fill="#0071B5" d="M113.353 2.701v66.305L64 97.138V78.015l33.016-18.82V29.633L64 48.454v-17.62l49.353-28.133zM14.646 125.303V58.998l49.353-28.134v19.125L30.982 68.808v28.059l33.017-18.82v19.124l-49.353 28.133z"></svg:path><svg:path fill="#002A41" d="M113.353 125.303V58.998L64 30.864v19.125l33.016 18.819v28.059L64 78.047v19.124l49.353 28.133z"></svg:path>`,
})
export class DeviconOriginalBackbonejsIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
