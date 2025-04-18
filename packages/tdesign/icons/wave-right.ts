import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignWaveRightIcon],svg[tdesign-wave-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.047.374l.824.567a12.1 12.1 0 0 1 3.084 3.084l.568.824l-1.647 1.135l-.568-.824a10.1 10.1 0 0 0-2.572-2.572l-.824-.568zM12.198 4.29a2.388 2.388 0 0 1 3.65.327a2.388 2.388 0 0 1 3.325 3.325q.173.12.327.273a2.39 2.39 0 0 1 0 3.377l-.42.42q.155.111.295.25a2.386 2.386 0 0 1 0 3.374l-4.32 4.32a7.19 7.19 0 0 1-10.168 0l-.845-.844a7.19 7.19 0 0 1-1.124-8.709l2.226-3.812a2.146 2.146 0 0 1 3.977.777zm5.888 5.888a.388.388 0 0 0-.548-.549L12.3 14.867l-1.415-1.414l6.604-6.604a.388.388 0 0 0-.548-.548l-6.604 6.604l-1.414-1.414l5.237-5.237a.388.388 0 0 0-.549-.548l-5.468 5.468a1.001 1.001 0 0 1-1.675-.967l.668-2.495A.146.146 0 0 0 6.87 7.6l-2.226 3.813a5.19 5.19 0 0 0 .812 6.286l.844.845a5.19 5.19 0 0 0 7.339 0l4.32-4.32a.386.386 0 0 0-.545-.546l-3.152 3.152l-1.414-1.415z"></svg:path>`,
})
export class TdesignWaveRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
