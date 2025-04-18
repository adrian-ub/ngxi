import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGestureWipeDownIcon],svg[tdesign-gesture-wipe-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.929 2.515l-.707.707C1.3 7.144.959 13.291 4.198 17.6v-2.1h2v4.986h-5.7v-2h1.87C-1.211 13.413-.732 6.35 3.809 1.808l.707-.707zm4.078 4.131a.756.756 0 0 0-1.31.756l5.017 8.688l-4.396 1.383l-.012.18l5.195 2.147c.217.09.463.073.667-.044l6.136-3.543a.76.76 0 0 0 .363-.807L20.535 9.88a.76.76 0 0 0-.737-.605l-4.197-.02a.76.76 0 0 0-.382.101l-2.735 1.58zM7.974 4.638a2.756 2.756 0 0 1 3.765 1.008l1.477 2.559l1.003-.58a2.76 2.76 0 0 1 1.391-.369l4.197.02a2.76 2.76 0 0 1 2.688 2.204l1.131 5.524a2.76 2.76 0 0 1-1.322 2.941l-6.136 3.543a2.76 2.76 0 0 1-2.431.16l-6.518-2.693l.109-1.694c.05-.774.57-1.438 1.31-1.671l2.097-.66l-3.77-6.528a2.756 2.756 0 0 1 1.01-3.764"></svg:path>`,
})
export class TdesignGestureWipeDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
