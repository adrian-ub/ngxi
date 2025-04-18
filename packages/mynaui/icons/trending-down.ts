import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiTrendingDownIcon],svg[mynaui-trending-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M15 18h6v-6"></svg:path><svg:path d="m3 7l4.443 5.223c.31.365.466.547.658.64a1 1 0 0 0 .546.09c.212-.024.418-.146.83-.39l2.826-1.674c.385-.229.578-.343.778-.37a1 1 0 0 1 .52.068c.187.077.344.237.658.556L21 18"></svg:path></svg:g>`,
})
export class MynauiTrendingDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
