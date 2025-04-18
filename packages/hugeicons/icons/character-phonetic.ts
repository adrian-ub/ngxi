import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCharacterPhoneticIcon],svg[hugeicons-character-phonetic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M21.826 15.914a4.115 4.115 0 0 1-3.43 3.412c-.32.05-.704.05-1.47.05s-1.15 0-1.47-.05a4.115 4.115 0 0 1-3.43-3.412c-.05-.319-.05-.7-.05-1.463v-3.283m0 0V9.526c0-.762 0-1.144.05-1.463a4.115 4.115 0 0 1 3.43-3.411c.32-.05.704-.05 1.47-.05c.767 0 1.15 0 1.47.05a4.115 4.115 0 0 1 3.43 3.411c.198 1.244.297 1.866-.092 2.411a2 2 0 0 1-.197.228c-.482.466-1.254.466-2.797.466z"></svg:path><svg:path d="M2.313 7.018c.424-.752 1.59-2.093 3.078-2.356s4.049-.394 5.317 1.165s1.268 3.216 1.268 5.37m0 0c0 1.24-.035 1.638-.149 2.456c-.135.97-.21 2.741-1.382 4.016a5.8 5.8 0 0 1-1.586 1.197c-.73.38-1.783.72-2.893.613c-2.086-.203-3.653-1.4-3.933-3.52c-.183-1.384.472-2.81 1.17-3.521s1.563-1.32 3.053-1.241c1.382.073 4.39.017 5.72 0"></svg:path></svg:g>`,
})
export class HugeiconsCharacterPhoneticIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
