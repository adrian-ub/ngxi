import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerHeadsetOffIcon],svg[tabler-headset-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 14v-3c0-1.953.7-3.742 1.862-5.13m2.182-1.825A8 8 0 0 1 20 11v3m-2 5c0 1.657-2.686 3-6 3"></svg:path><svg:path d="M4 14a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm12.169-1.82c.253-.115.534-.18.831-.18h1a2 2 0 0 1 2 2v2m-1.183 2.826c-.25.112-.526.174-.817.174h-1a2 2 0 0 1-2-2v-2M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerHeadsetOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
