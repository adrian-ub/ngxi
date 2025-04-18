import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsIntravenousBagIcon],svg[healthicons-intravenous-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M24 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path fill-rule="evenodd" d="M33.982 38.048h-.99v2h-4.01v4h-2v-4h-3.991a2 2 0 0 1-2 1.952h-2a2 2 0 0 1-2-1.952h-2v-2h-1.009a4 4 0 0 1-4-4V10.162a4 4 0 0 1 4-4h6l1.132-1.164a4 4 0 0 1 5.736 0l1.132 1.164h6a4 4 0 0 1 4 4v23.886a4 4 0 0 1-4 4M26.548 7.556a2 2 0 0 0 1.434.606h6a2 2 0 0 1 2 2V11.5h-3.99v2h3.99v3h-3.99v2h3.99v3h-3.99v2h3.99v4.6c-1.409-1.461-4.223-3.37-7.99-.93c-3.978 2.577-7.619 2.425-11.809 2.25c-1.335-.055-2.726-.113-4.2-.085V10.162a2 2 0 0 1 2-2h6a2 2 0 0 0 1.433-.606l1.132-1.164a2 2 0 0 1 2.868 0z" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsIntravenousBagIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
