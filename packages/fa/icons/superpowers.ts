import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSuperpowersIcon],svg[fa-superpowers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1473 929q7-118-33-226.5t-113-189t-177-131T929 325q-116-7-225.5 32t-192 110.5t-135 175T317 863q-7 118 33 226.5t113 189t177.5 131T862 1467q155 9 293-59t224-195.5t94-283.5M1792 0l-349 348q120 117 180.5 272t50.5 321q-11 183-102 339t-241 255.5T999 1660L0 1792l347-347q-120-116-180.5-271.5T116 852q11-184 102-340t241.5-255.5T792 132q167-22 500-66t500-66"></svg:path>`,
})
export class FaSuperpowersIcon {
  readonly viewBox = input("0 0 1792 1792")
  readonly width = input("1em")
  readonly height = input("1em")
}
