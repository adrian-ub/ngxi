import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mynauiGhostSadIcon],svg[mynaui-ghost-sad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M9 16c.85-.63 1.885-1 3-1s2.15.37 3 1m-5.5-5.5V10m5 .5V10"></svg:path><svg:path d="M3 18.561v-6.517C3 7.05 7.03 3 12 3s9 4.05 9 9.044v6.517c0 1.162-.967 2.519-2 2c-.835-.42-2.223-.52-3 0c-.874.585-2.126.585-3 0c-.885-.593-1.649-.57-2.5 0c-.874.585-2.126.585-3 0c-.777-.52-1.665-.42-2.5 0c-1.033.519-2-.838-2-2"></svg:path></svg:g>`,
})
export class MynauiGhostSadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
