import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons10MinuteSchoolIcon],svg[arcticons-10-minute-school-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m12.5 16.596l5.087-2.77v20.348M35.5 20.566v6.868a6.74 6.74 0 0 1-6.74 6.74h0a6.74 6.74 0 0 1-6.74-6.74v-6.868a6.74 6.74 0 0 1 6.74-6.74h0c2.065 0 3.914.93 5.15 2.392l-.005.004L28.76 24"></svg:path>`,
})
export class Arcticons10MinuteSchoolIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
