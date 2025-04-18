import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidBoltSlashIcon],svg[heroicons-solid-bolt-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M2.22 2.22a.75.75 0 0 1 1.06 0l14.5 14.5a.75.75 0 1 1-1.06 1.06L2.22 3.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></svg:path><svg:path d="M4.73 7.912L2.191 10.75A.75.75 0 0 0 2.75 12h6.068L4.73 7.912Zm4.503 4.503l-1.216 5.678a.75.75 0 0 0 1.292.657l2.956-3.303l-3.032-3.032Zm6.037-.327l2.539-2.838A.75.75 0 0 0 17.25 8h-6.068l4.088 4.088Zm-4.503-4.503l1.216-5.678a.75.75 0 0 0-1.292-.657L7.735 4.553l3.032 3.032Z"></svg:path></svg:g>`,
})
export class HeroiconsSolidBoltSlashIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
