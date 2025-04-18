import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerSettingsBoltIcon],svg[tabler-settings-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M13.256 20.473c-.855.907-2.583.643-2.931-.79a1.724 1.724 0 0 0-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066-2.573c-.94-1.543.826-3.31 2.37-2.37c1 .608 2.296.07 2.572-1.065c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.07.26 1.488 1.29 1.254 2.15M19 16l-2 3h4l-2 3"></svg:path><svg:path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0"></svg:path></svg:g>`,
})
export class TablerSettingsBoltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
