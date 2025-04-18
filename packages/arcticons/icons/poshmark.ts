import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPoshmarkIcon],svg[arcticons-poshmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.198 15.945v16.373l-.005-.004c0 4.917-4.175 8.917-9.34 8.917s-9.353-4-9.353-8.917c0-4.51 3.52-8.234 8.074-8.816"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M20.805 32.047V15.675l.002-.003c0-4.917 4.175-8.903 9.34-8.903s9.353 3.986 9.353 8.903c0 4.582-3.637 8.364-8.321 8.844"></svg:path>`,
})
export class ArcticonsPoshmarkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
