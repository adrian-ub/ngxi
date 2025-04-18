import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconSketchIcon],svg[devicon-sketch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#fdb300" d="M27.93 10.334L64 6.547l36.07 3.788L128 47.517l-64 73.936L0 47.517Z"></svg:path><svg:path fill="#ea6c00" d="M25.925 47.517L64 121.453L0 47.517Zm76.15 0L64 121.453l64-73.936Z"></svg:path><svg:path fill="#fdad00" d="M25.925 47.517h76.15L64 121.453Z"></svg:path><svg:path fill="#fdd231" d="m64 6.547l-36.07 3.787l-2.005 37.183Zm0 0l36.07 3.787l2.005 37.183z"></svg:path><svg:path fill="#fdad00" d="m128 47.517l-27.93-37.183l2.005 37.183z"></svg:path><svg:path fill="#feeeb7" d="m64 6.547l-38.075 40.97h76.15z"></svg:path><svg:path fill="#fdad00" d="m0 47.517l27.93-37.183l-2.005 37.183Z"></svg:path>`,
})
export class DeviconSketchIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
