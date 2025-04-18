import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerLifebuoyFilledIcon],svg[tabler-lifebuoy-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.757 16.172l3.571 3.571a10.004 10.004 0 0 1-12.656 0l3.57-3.571A5 5 0 0 0 12 17c1.02 0 1.967-.305 2.757-.828m-10.5-10.5l3.571 3.57A5 5 0 0 0 7 12c0 1.02.305 1.967.828 2.757l-3.57 3.572A10 10 0 0 1 2 12l.005-.324a10 10 0 0 1 2.252-6.005M22 12c0 2.343-.82 4.57-2.257 6.328l-3.571-3.57A5 5 0 0 0 17 12c0-1.02-.305-1.967-.828-2.757l3.571-3.57A10 10 0 0 1 22 12m-5-8.66q.707.41 1.33.918l-3.573 3.57A5 5 0 0 0 12 7c-1.02 0-1.967.305-2.757.828L5.67 4.258A10 10 0 0 1 17 3.34"></svg:path>`,
})
export class TablerLifebuoyFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
