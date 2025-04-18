import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSwarmIcon],svg[hugeicons-swarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17 5.167C17 6.547 15 8 15 8s-2-1.453-2-2.833S13.895 3 15 3s2 .786 2 2.167M6.196 6.211c2.187.647 3.804 4.16 3.804 4.16s-2.984 2.154-5.17 1.508s-3.127-2.283-2.75-3.848c.378-1.565 1.929-2.466 4.115-1.82M18.15 20.08C14.458 22.197 8 19.998 8 19.998s1.311-6.652 5.004-8.768s6.946-1.34 8.367 1.104c1.42 2.444.471 5.63-3.221 7.746"></svg:path><svg:path d="M16 10.5c0 3.04 1.596 5.844 4 7.566m-9-5.008c.183 2.834 2.71 5.83 5 7.442"></svg:path></svg:g>`,
})
export class HugeiconsSwarmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
