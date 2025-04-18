import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGestureUpAndDownIcon],svg[tdesign-gesture-up-and-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m.499.513l5.699.002v4.986h-2V3.4a11.01 11.01 0 0 0 0 13.2v-2.1h2v4.985h-5.7v-2h1.87A13.01 13.01 0 0 1 2.37 2.514L.498 2.513zm9.508 7.133a.756.756 0 0 0-1.31.756l5.017 8.688l-4.396 1.383l-.012.18l5.195 2.147c.217.09.463.073.667-.044l6.136-3.543a.76.76 0 0 0 .363-.807l-1.132-5.525a.76.76 0 0 0-.737-.605l-4.197-.02a.76.76 0 0 0-.382.101l-2.735 1.58zM7.974 5.638a2.756 2.756 0 0 1 3.765 1.008l1.477 2.558l1.003-.579a2.76 2.76 0 0 1 1.391-.37l4.197.02a2.76 2.76 0 0 1 2.688 2.204l1.131 5.525a2.76 2.76 0 0 1-1.322 2.94l-6.136 3.544a2.76 2.76 0 0 1-2.431.16l-6.518-2.693l.109-1.694c.05-.774.57-1.438 1.31-1.671l2.097-.66l-3.77-6.528a2.756 2.756 0 0 1 1.01-3.764"></svg:path>`,
})
export class TdesignGestureUpAndDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
