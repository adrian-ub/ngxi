import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsHackerrankIcon],svg[hugeicons-hackerrank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M19.16 5.984c-1.089-.86-3.182-2.275-6.172-3.258c-.46-.15-.69-.226-.988-.226s-.528.075-.988.226C8.022 3.71 5.93 5.124 4.84 5.984c-.382.302-.573.453-.757.776c-.184.324-.22.589-.293 1.118c-.133.971-.29 2.467-.29 4.122s.157 3.15.29 4.122c.072.53.109.794.293 1.118s.375.474.757.776c1.089.86 3.182 2.275 6.172 3.258c.46.15.69.226.988.226s.528-.076.988-.227c2.99-.982 5.083-2.397 6.172-3.257c.382-.302.573-.452.757-.776s.22-.589.293-1.118c.133-.971.29-2.467.29-4.122s-.157-3.15-.29-4.122c-.072-.53-.109-.794-.293-1.118c-.184-.323-.375-.474-.757-.776M9.5 8v7m0-3h5"></svg:path><svg:path d="M15.5 16h-2l1 1zm-7-8h2l-1-1zm6 1v7"></svg:path></svg:g>`,
})
export class HugeiconsHackerrankIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
